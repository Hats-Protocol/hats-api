declare module 'ioredis-mock' {
  import { Redis, RedisOptions } from 'ioredis';
  
  export default class RedisMock extends Redis {
    constructor(options?: RedisOptions);
  }
}