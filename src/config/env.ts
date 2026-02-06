import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 5000,

  MYSQL: {
    HOST: process.env.MYSQL_HOST || "localhost",
    PORT: Number(process.env.MYSQL_PORT) || 3306,
    USER: process.env.MYSQL_USER || "root",
    PASSWORD: process.env.MYSQL_PASSWORD || "root",
    DB: process.env.MYSQL_DB || "farmlokal"
  },

  REDIS: {
    HOST: process.env.REDIS_HOST || "localhost",
    PORT: Number(process.env.REDIS_PORT) || 6379
  },

  OAUTH: {
    URL: process.env.OAUTH_URL || "",
    CLIENT_ID: process.env.OAUTH_CLIENT_ID || "",
    CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET || ""
  }
};
