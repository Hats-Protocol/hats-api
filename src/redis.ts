import { Redis } from "ioredis";

export class RedisCacheClient {
  private readonly _client: Redis;

  constructor() {
    this._client = new Redis({
      port: 14207,
      host: "redis-14207.c322.us-east-1-2.ec2.redns.redis-cloud.com",
      username: "default",
      password: "e2WXvkiSBnKJv4GwnQNUaApeu1py7unT",
    });
  }

  deleteMappingEntities(entryId: string) {
    const matchParam = `*${entryId}*`;
    const stream = this._client.scanStream({
      match: matchParam,
    });
    stream.on("data", (resultKeys) => {
      if (resultKeys.length > 0) {
        const keysToDelete: string[] = [];
        resultKeys.forEach(function (item: string) {
          if (keysToDelete.indexOf(item) < 0) {
            keysToDelete.push(item);
          }
        });
        this._client.del(...keysToDelete);
      }
    });
    stream.on("end", () => {
      console.log(`Deleted all keys of mapping entities for ID ${entryId} `);
    });
  }

  invalidateEntity(entityName: string, entityId: string) {
    const matchParam = `response-cache:${entityName}.${entityId}:*`;
    const stream = this._client.scanStream({
      match: matchParam,
    });
    stream.on("data", (resultKeys) => {
      for (let i = 0; i < resultKeys.length; i++) {
        const hash = (resultKeys[i] as string).substring(matchParam.length - 1);

        console.log(`deleting response-cache:${hash}`);
        this._client.del(`response-cache:${hash}`);
        this.deleteMappingEntities(hash);
      }
    });
    stream.on("end", () => {
      console.log(
        `Deleted all keys of entity ${entityName} with ID ${entityId}`
      );
    });
  }
}
