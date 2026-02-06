// import { DataSource } from "typeorm";
// import { Product } from "../models/product.model";
// import dotenv from "dotenv";

// dotenv.config();

// export const AppDataSource = new DataSource({
//   type: "mysql",
//   host: process.env.MYSQL_HOST,
//   port: Number(process.env.MYSQL_PORT),
//   username: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DB,
//   entities: [Product],
//   synchronize: true,
// });
import { DataSource } from "typeorm";
import { Product } from "../models/product.model";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Product],
  synchronize: true,

  // 🔴 REQUIRED FOR AIVEN MYSQL
  ssl: {
    rejectUnauthorized: false
  }
});

