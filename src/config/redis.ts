// import Redis from "ioredis";
// import dotenv from "dotenv";

// dotenv.config();

// export const redis = new Redis({
//   host: process.env.REDIS_HOST || "localhost",
//   port: Number(process.env.REDIS_PORT) || 6379,
//   retryStrategy(times) {
//     const delay = Math.min(times * 50, 2000);
//     return delay;
//   }
// });

// redis.on("connect", () => {
//   console.log("Connected to Redis");
// });

// redis.on("error", (err) => {
//   console.error("Redis connection error:", err);
// });
import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

let redis: Redis;

if (process.env.REDIS_URL) {
  // PRODUCTION (Render)
  redis = new Redis(process.env.REDIS_URL);
  console.log("Connected to Redis via REDIS_URL");
} else {
  // LOCAL DEVELOPMENT
  redis = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  });
  console.log("Connected to local Redis");
}

export { redis };
