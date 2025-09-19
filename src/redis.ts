import { Redis } from "ioredis";
import type { RedisOptions } from "ioredis";
import logger from "./log";
import { JobContext } from "./bullmq-transaction-processor";

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

  async invalidateEntity(
    networkId: string,
    txHash: string,
    entityName: string,
    entityId: string,
    jobContext?: JobContext
  ): Promise<void> {
    const entity = `${entityName}.${entityId}`;
    logger.log({
      level: "info",
      message: `${networkId}-${txHash}: invalidating entity ${entityName} with ID ${entityId}`,
      txHash: txHash,
      networkId: networkId,
      entity: `${entityName}.${entityId}`,
    });

    // Log to job dashboard if available
    if (jobContext?.job) {
      if (entityName.includes('_Wearer')) {
        if (entityId === 'undefined') {
          await jobContext.job.log(`Clearing cache for undefined wearer records`);
        } else {
          await jobContext.job.log(`Invalidating wearer details for \`${entityId}\``);
        }
      } else if (entityName.includes('_Tree')) {
        const treeIdDecimal = parseInt(entityId, 16);
        await jobContext.job.log(`Invalidating tree ${treeIdDecimal} details`);
      } else if (entityName.includes('_Hat')) {
        await jobContext.job.log(`Invalidating hat \`${entityId}\` details`);
      } else if (entityName.includes('_ClaimsHatter')) {
        await jobContext.job.log(`Invalidating claims hatter \`${entityId}\` details`);
      } else {
        await jobContext.job.log(`Invalidating entity ${entityName} with ID ${entityId}`);
      }
    }

    const matchParam = `response-cache:*${entity}*`;
    const stream = this._client.scanStream({
      match: matchParam,
      count: 100,
    });

    const keysToDelete: string[] = [];
    let pipeline = this._client.pipeline();

    try {
      await new Promise<void>((resolve, reject) => {
        const execs: Promise<any>[] = [];
        stream.on("data", (resultKeys: string[]) => {
          for (let fullKey of resultKeys) {
            // Keys already match via SCAN 'match'; no extra includes() check needed
            keysToDelete.push(fullKey);
            pipeline.unlink(fullKey); // non-blocking delete

            if (pipeline.length >= 100) {
              execs.push(pipeline.exec());
              pipeline = this._client.pipeline();
            }
          }
        });

        stream.on("end", async () => {
          try {
            if (pipeline.length > 0) execs.push(pipeline.exec());
            await Promise.all(execs);
            resolve();
          } catch (err) {
            reject(err);
          }
        });
        stream.on("error", async (err) => {
          try {
            if (pipeline.length > 0) execs.push(pipeline.exec());
            await Promise.allSettled(execs);
          } finally {
            reject(err);
          }
        });
      });
    } catch (error) {
      logger.log({
        level: "error",
        message: `Invalidation error`,
        txHash: txHash,
        networkId: networkId,
        entity: `${entityName}.${entityId}`,
        keysToDelete: keysToDelete,
        error: error,
      });

      throw new Error(
        `Error invalidating entity ${entityName} with ID ${entityId}`,
        { cause: error as Error }
      );
    }
  }

  async invalidateHatsInTree(
    networkId: string,
    txHash: string,
    networkPrefix: string,
    treeId: string,
    jobContext?: JobContext
  ): Promise<void> {
    const entityPrefix = `${networkPrefix}_Hat.${treeId}`;
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

    const matchParam = `response-cache:*${entityPrefix}*`;
    const stream = this._client.scanStream({
      match: matchParam,
      count: 100,
    });

    const keysToDelete: string[] = [];
    let pipeline = this._client.pipeline();

    try {
      await new Promise<void>((resolve, reject) => {
        const execs: Promise<any>[] = [];
        stream.on("data", (resultKeys: string[]) => {
          for (let fullKey of resultKeys) {
            // Keys already match via SCAN 'match'; no extra includes() check needed
            keysToDelete.push(fullKey);
            pipeline.unlink(fullKey); // non-blocking delete

            if (pipeline.length >= 100) {
              execs.push(pipeline.exec());
              pipeline = this._client.pipeline();
            }
          }
        });

        stream.on("end", async () => {
          try {
            if (pipeline.length > 0) execs.push(pipeline.exec());
            await Promise.all(execs);
            resolve();
          } catch (err) {
            reject(err);
          }
        });
        stream.on("error", async (err) => {
          try {
            if (pipeline.length > 0) execs.push(pipeline.exec());
            await Promise.allSettled(execs);
          } finally {
            reject(err);
          }
        });
      });
    } catch (error) {
      logger.log({
        level: "error",
        message: `Invalidation error`,
        txHash: txHash,
        networkId: networkId,
        treeId: treeId,
        networkPrefix: networkPrefix,
        keysToDelete: keysToDelete,
        error: error,
      });

      throw new Error(
        `Error invalidating hats of tree ${treeId} in network ${networkPrefix}`,
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
