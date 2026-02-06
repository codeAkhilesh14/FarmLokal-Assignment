import { redis } from "../config/redis";

export async function isDuplicate(eventId: string): Promise<boolean> {
  const exists = await redis.get(`event:${eventId}`);

  if (exists) return true;

  await redis.set(`event:${eventId}`, "processed", "EX", 86400);

  return false;
}
