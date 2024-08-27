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

    const matchParam = `*${entity}*`;
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
            const key = fullKey.slice(15);
            let hash: string | undefined = undefined;
            if (key.startsWith(entity)) {
              hash = key.slice(entity.length + 1);
            } else if (key.endsWith(entity)) {
              hash = key.slice(0, key.length - entity.length - 1);
            }

            if (hash !== undefined && !keysToDelete.includes(hash)) {
              keysToDelete.push(hash);
              pipeline.del(`response-cache:${hash}`);
            }
            if (!keysToDelete.includes(fullKey)) {
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
        stream.on("error", reject);
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

    const matchParam = `*${entityPrefix}*`;
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
            const key = fullKey.slice(15);
            let hash: string | undefined = undefined;
            if (key.startsWith(entityPrefix)) {
              hash = key.slice(exampleEntity.length + 1);
            } else if (
              key.length > 56 &&
              key.slice(0, -56).endsWith(entityPrefix)
            ) {
              hash = key.slice(0, key.length - exampleEntity.length - 1);
            }

            if (hash !== undefined && !keysToDelete.includes(hash)) {
              keysToDelete.push(hash);
              pipeline.del(`response-cache:${hash}`);
            }

            if (pipeline.length > 10) {
              pipeline.exec();
              pipeline = this._client.pipeline();
            }
          }
        });

        stream.on("end", () => {
          pipeline.exec(() => resolve("success"));
        });
        stream.on("error", reject);
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
}
