import { Redis } from "ioredis";
import type { RedisOptions } from "ioredis";
import logger from "./log";
import { JobContext } from "./bullmq-transaction-processor";

// Entity type for cache invalidation
export interface CacheEntity {
  typename: string;
  id: string;
}

export class RedisCacheClient {
  private readonly _client: Redis;

  constructor() {
    const redisConfig: RedisOptions = {
      port: Number(process.env.REDIS_PORT || 6379),
      host: process.env.REDIS_HOST || 'localhost',
      maxRetriesPerRequest: null, // Required for BullMQ blocking operations
      enableReadyCheck: false, // BullMQ best practice with ioredis
    };

    // Only include auth credentials if password is defined
    if (process.env.REDIS_PASSWORD) {
      redisConfig.username = process.env.REDIS_USERNAME || "default";
      redisConfig.password = process.env.REDIS_PASSWORD;
    }

    const clientOptions = process.env.REDIS_URL
      ? process.env.REDIS_URL
      : redisConfig;
    this._client = new Redis(clientOptions as any);
  }

  /**
   * Invalidate cache entries by entity using new entity-based cache keys.
   * Works with Hive Gateway's entity-based caching (typename:id format).
   */
  async invalidateEntities(
    entities: CacheEntity[],
    networkId: string,
    txHash: string,
    jobContext?: JobContext
  ): Promise<void> {
    logger.log({
      level: "info",
      message: `${networkId}-${txHash}: invalidating ${entities.length} entities`,
      txHash: txHash,
      networkId: networkId,
      entities: entities.map(e => `${e.typename}:${e.id}`),
    });

    for (const entity of entities) {
      // Log to job dashboard if available
      if (jobContext?.job) {
        if (entity.typename.includes('_Wearer')) {
          if (entity.id === 'undefined') {
            await jobContext.job.log(`Clearing cache for undefined wearer records`);
          } else {
            await jobContext.job.log(`Invalidating wearer details for \`${entity.id}\``);
          }
        } else if (entity.typename.includes('_Tree')) {
          const treeIdDecimal = parseInt(entity.id, 16);
          await jobContext.job.log(`Invalidating tree ${treeIdDecimal} details`);
        } else if (entity.typename.includes('_Hat')) {
          await jobContext.job.log(`Invalidating hat \`${entity.id}\` details`);
        } else if (entity.typename.includes('_ClaimsHatter')) {
          await jobContext.job.log(`Invalidating claims hatter \`${entity.id}\` details`);
        } else {
          await jobContext.job.log(`Invalidating entity ${entity.typename}:${entity.id}`);
        }
      }
    }

    // Entity-based key pattern: envelop response cache uses sets for entity->response mapping
    // We need to invalidate both the entity set and any response keys linked to it
    const keysToDelete: string[] = [];
    let pipeline = this._client.pipeline();

    try {
      for (const entity of entities) {
        // Pattern for entity keys: entity:{typename}:{id}
        const entityKey = `entity:${entity.typename}:${entity.id}`;

        // Get all response IDs associated with this entity
        const responseIds = await this._client.smembers(entityKey);

        // Delete the entity set
        keysToDelete.push(entityKey);
        pipeline.del(entityKey);

        // Delete all associated response cache entries
        for (const responseId of responseIds) {
          const responseKey = `response:${responseId}`;
          keysToDelete.push(responseKey);
          pipeline.unlink(responseKey);
        }

        // Execute pipeline in batches of 100
        if (pipeline.length >= 100) {
          await pipeline.exec();
          pipeline = this._client.pipeline();
        }
      }

      // Execute remaining commands
      if (pipeline.length > 0) {
        await pipeline.exec();
      }

      logger.log({
        level: "info",
        message: `Successfully invalidated ${keysToDelete.length} cache keys`,
        txHash: txHash,
        networkId: networkId,
      });
    } catch (error) {
      logger.log({
        level: "error",
        message: `Entity invalidation error`,
        txHash: txHash,
        networkId: networkId,
        entities: entities,
        keysToDelete: keysToDelete,
        error: error,
      });

      throw new Error(
        `Error invalidating entities`,
        { cause: error as Error }
      );
    }
  }

  /**
   * Legacy method for backward compatibility - converts to entity-based format
   */
  async invalidateEntity(
    networkId: string,
    txHash: string,
    entityName: string,
    entityId: string,
    jobContext?: JobContext
  ): Promise<void> {
    await this.invalidateEntities(
      [{ typename: entityName, id: entityId }],
      networkId,
      txHash,
      jobContext
    );
  }

  /**
   * Invalidate all hats in a tree using pattern matching on entity IDs.
   * Note: This still requires SCAN since we need to find all hats starting with treeId.
   */
  async invalidateHatsInTree(
    networkId: string,
    txHash: string,
    networkPrefix: string,
    treeId: string,
    jobContext?: JobContext
  ): Promise<void> {
    logger.log({
      level: "info",
      message: `${networkId}-${txHash}: invalidating hats of tree ${treeId}`,
      txHash: txHash,
      networkId: networkId,
    });

    // Log to job dashboard if available
    if (jobContext?.job) {
      const treeIdDecimal = parseInt(treeId, 16);
      await jobContext.job.log(`Invalidating hats of tree ${treeIdDecimal}`);
    }

    // Find all entity keys for hats in this tree
    // Entity keys format: entity:{typename}:{id}
    const typename = `${networkPrefix}Hat`;
    const matchParam = `entity:${typename}:${treeId}*`;
    const stream = this._client.scanStream({
      match: matchParam,
      count: 100,
    });

    const entitiesToInvalidate: CacheEntity[] = [];

    try {
      await new Promise<void>((resolve, reject) => {
        stream.on("data", (resultKeys: string[]) => {
          for (let fullKey of resultKeys) {
            // Extract entity ID from key: entity:{typename}:{id}
            const parts = fullKey.split(':');
            if (parts.length >= 3) {
              const id = parts.slice(2).join(':'); // Handle IDs with colons
              entitiesToInvalidate.push({ typename, id });
            }
          }
        });

        stream.on("end", () => resolve());
        stream.on("error", (err) => reject(err));
      });

      // Use entity-based invalidation for all found hats
      if (entitiesToInvalidate.length > 0) {
        await this.invalidateEntities(entitiesToInvalidate, networkId, txHash, jobContext);
      } else {
        logger.log({
          level: "info",
          message: `No hats found in tree ${treeId}`,
          txHash: txHash,
          networkId: networkId,
        });
      }
    } catch (error) {
      logger.log({
        level: "error",
        message: `Invalidation error for tree`,
        txHash: txHash,
        networkId: networkId,
        treeId: treeId,
        networkPrefix: networkPrefix,
        error: error,
      });

      throw new Error(
        `Error invalidating hats of tree ${treeId} in network ${networkPrefix}`,
        { cause: error as Error }
      );
    }
  }

  /**
   * Invalidate all cache entries for a specific network.
   * Finds all entity keys with the network prefix and invalidates them.
   */
  async invalidateAllForNetwork(networkId: string): Promise<number> {
    logger.log({
      level: "info",
      message: `Invalidating all cache entries for network ${networkId}`,
      networkId: networkId,
    });

    const { CHAIN_ID_TO_ENTITY_PREFIX } = await import("./constants");
    const networkPrefix = CHAIN_ID_TO_ENTITY_PREFIX[networkId];

    if (!networkPrefix) {
      throw new Error(`Unsupported network ID: ${networkId}`);
    }

    // Match all entity keys for this network prefix
    // Pattern: entity:{networkPrefix}*
    const matchParam = `entity:${networkPrefix}*`;
    const stream = this._client.scanStream({
      match: matchParam,
      count: 100,
    });

    const entitiesToInvalidate: CacheEntity[] = [];

    try {
      await new Promise<void>((resolve, reject) => {
        stream.on("data", (resultKeys: string[]) => {
          for (let fullKey of resultKeys) {
            // Extract typename and ID from key: entity:{typename}:{id}
            const parts = fullKey.split(':');
            if (parts.length >= 3) {
              const typename = parts[1];
              const id = parts.slice(2).join(':');
              entitiesToInvalidate.push({ typename, id });
            }
          }
        });

        stream.on("end", () => resolve());
        stream.on("error", (err) => reject(err));
      });

      if (entitiesToInvalidate.length > 0) {
        await this.invalidateEntities(
          entitiesToInvalidate,
          networkId,
          'invalidate-all',
          undefined
        );
      }

      logger.log({
        level: "info",
        message: `Successfully invalidated ${entitiesToInvalidate.length} entities for network ${networkId}`,
        networkId: networkId,
        deletedCount: entitiesToInvalidate.length,
      });

      return entitiesToInvalidate.length;
    } catch (error) {
      logger.log({
        level: "error",
        message: `Error invalidating all cache entries for network ${networkId}`,
        networkId: networkId,
        error: error,
      });

      throw new Error(
        `Error invalidating all cache entries for network ${networkId}`,
        { cause: error as Error }
      );
    }
  }

  /**
   * Getter method to access the underlying Redis client for BullMQ.
   * The client is shared across BullMQ and cache invalidation operations.
   * Caller is responsible for connection lifecycle management.
   */
  getRedisClient(): Redis {
    return this._client;
  }
}
