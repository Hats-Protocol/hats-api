import { Redis } from "ioredis";
import logger from "./log";

export class RedisCacheClient {
  private readonly _client: Redis;

  constructor() {
    const redisConfig: any = {
      port: Number(process.env.REDIS_PORT || 6379),
      host: process.env.REDIS_HOST || 'localhost',
      maxRetriesPerRequest: null, // Required for BullMQ blocking operations
    };

    // Only include auth credentials if password is defined
    if (process.env.REDIS_PASSWORD) {
      redisConfig.username = "default";
      redisConfig.password = process.env.REDIS_PASSWORD;
    }

    this._client = new Redis(redisConfig);
  }

  async invalidateEntity(
    networkId: string,
    txHash: string,
    entityName: string,
    entityId: string
  ): Promise<void> {
    const entity = `${entityName}.${entityId}`;
    logger.log({
      level: "info",
      message: `${networkId}-${txHash}: invalidating entity ${entityName} with ID ${entityId}`,
      txHash: txHash,
      networkId: networkId,
      entity: `${entityName}.${entityId}`,
    });

    const matchParam = `response-cache:*${entity}*`;
    const stream = this._client.scanStream({
      match: matchParam,
      count: 100,
    });

    const keysToDelete: string[] = [];
    let pipeline = this._client.pipeline();

    try {
      await new Promise((resolve, reject) => {
        stream.on("data", (resultKeys: string[]) => {
          for (let fullKey of resultKeys) {
            // Check if the key contains the entity we're looking for
            if (fullKey.includes(entity)) {
              keysToDelete.push(fullKey);
              pipeline.del(fullKey);
            }

            if (pipeline.length > 100) {
              pipeline.exec();
              pipeline = this._client.pipeline();
            }
          }
        });

        stream.on("end", () => {
          pipeline.exec(() => resolve("success"));
        });
        stream.on("error", () => {
          pipeline.exec(() => reject("failure"));
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
        `Error invalidating entity ${entityName} with ID ${entityId}: ${error}`
      );
    }
  }

  async invalidateHatsInTree(
    networkId: string,
    txHash: string,
    networkPrefix: string,
    treeId: string
  ): Promise<void> {
    const entityPrefix = `${networkPrefix}_Hat.${treeId}`;
    const exampleEntity = `${networkPrefix}_Hat.0x0000000100000000000000000000000000000000000000000000000000000000`;
    logger.log({
      level: "info",
      message: `${networkId}-${txHash}: invalidating hats of tree ${treeId}`,
      txHash: txHash,
      networkId: networkId,
    });

    const matchParam = `response-cache:*${entityPrefix}*`;
    const stream = this._client.scanStream({
      match: matchParam,
      count: 100,
    });

    const keysToDelete: string[] = [];
    let pipeline = this._client.pipeline();

    try {
      await new Promise((resolve, reject) => {
        stream.on("data", (resultKeys: string[]) => {
          for (let fullKey of resultKeys) {
            // Check if the key contains a hat ID from this tree
            if (fullKey.includes(entityPrefix)) {
              keysToDelete.push(fullKey);
              pipeline.del(fullKey);
            }

            if (pipeline.length > 100) {
              pipeline.exec();
              pipeline = this._client.pipeline();
            }
          }
        });

        stream.on("end", () => {
          pipeline.exec(() => resolve("success"));
        });
        stream.on("error", () => {
          pipeline.exec(() => reject("failure"));
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
        `Error invalidating hats of tree ${treeId} in network ${networkPrefix}: ${error}`
      );
    }
  }

  // Getter method to access Redis client for BullMQ
  getRedisClient(): Redis {
    return this._client;
  }
}
