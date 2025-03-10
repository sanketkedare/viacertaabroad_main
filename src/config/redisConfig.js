import { createClient } from "ioredis";

const redisClient = createClient({
  host: "localhost",
  port: 6379,
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

export default redisClient;
