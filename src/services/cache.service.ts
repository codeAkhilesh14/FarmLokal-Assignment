import { redis } from "../config/redis";

export class CacheService {
  static async get(key: string) {
    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
  }

  static async set(key: string, value: any, ttl = 60) {
    await redis.set(key, JSON.stringify(value), "EX", ttl);
  }

  static async del(key: string) {
    await redis.del(key);
  }
}
