import { Redis } from "ioredis";
import logger from "./log";

export class RedisCacheClient {
  private readonly _client: Redis;

  constructor() {
    this._client = new Redis({
      port: Number(process.env.REDIS_PORT),
      host: process.env.REDIS_HOST,
      username: "default",
      password: process.env.REDIS_PASSWORD,
    });
  }

  async invalidateEntity(entityName: string, entityId: string): Promise<void> {
    const entity = `${entityName}.${entityId}`;
    logger.log({
      level: "info",
      message: `Invalidating entity ${entityName} with ID ${entityId}`,
      entity: `${entityName}.${entityId}`,
    });

    const matchParam = `*${entity}*`;
    const stream = this._client.scanStream({
      match: matchParam,
    });

    const keysToDelete: string[] = [];
    const operations: Promise<any>[] = [];

    try {
      await new Promise((resolve, reject) => {
        stream.on("data", (resultKeys: string[]) => {
          for (let key of resultKeys) {
            key = key.slice(15);
            let hash: string | undefined = undefined;
            if (key.startsWith(entity)) {
              hash = key.slice(entity.length + 1);
            } else if (key.endsWith(entity)) {
              hash = key.slice(0, key.length - entity.length - 1);
            }

            if (hash !== undefined && !keysToDelete.includes(hash)) {
              keysToDelete.push(hash);
              const delPromise = this._client.del(`response-cache:${hash}`);
              operations.push(delPromise);
            }
          }
        });

        stream.on("end", resolve);
        stream.on("error", reject);
      });
    } catch (error) {
      logger.log({
        level: "error",
        message: `Invalidation error`,
        entity: `${entityName}.${entityId}`,
        keysToDelete: keysToDelete,
        error: error,
      });

      throw new Error(
        `Error invalidating entity ${entityName} with ID ${entityId}: ${error}`
      );
    }

    try {
      await Promise.all(operations);
      logger.log({
        level: "info",
        message: "Invalidation success",
        entity: `${entityName}.${entityId}`,
        keysToDelete: keysToDelete,
      });
    } catch (error) {
      logger.log({
        level: "error",
        message: `Invalidation error`,
        entity: `${entityName}.${entityId}`,
        keysToDelete: keysToDelete,
        error: error,
      });

      throw new Error(
        `Error invalidating entity ${entityName} with ID ${entityId}: ${error}`
      );
    }
  }
}
