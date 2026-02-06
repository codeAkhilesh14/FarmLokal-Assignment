// import { AppDataSource } from "../config/db";
// import { Product } from "../models/product.model";
// import { redis } from "../config/redis";

// export class ProductService {
//   static async getProducts(query: any) {
//     const key = JSON.stringify(query);

//     const cached = await redis.get(key);
//     if (cached) return JSON.parse(cached);

//     const repo = AppDataSource.getRepository(Product);

//     const data = await repo.find({
//       take: query.limit || 20,
//       order: { price: query.sort || "ASC" },
//     });

//     await redis.set(key, JSON.stringify(data), "EX", 60);

//     return data;
//   }
// }

import { AppDataSource } from "../config/db";
import { Product } from "../models/product.model";

export class ProductService {
  static async getProducts(query: any) {
    const repo = AppDataSource.getRepository(Product);

    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 20;

    const sortField = query.sort || "id";
    const sortOrder = query.order === "desc" ? "DESC" : "ASC";

    const search = query.search || "";
    const category = query.category;

    const qb = repo.createQueryBuilder("product");

    if (search) {
      qb.andWhere("product.name LIKE :search", {
        search: `%${search}%`,
      });
    }

    if (category) {
      qb.andWhere("product.category = :category", {
        category,
      });
    }

    qb.orderBy(`product.${sortField}`, sortOrder as any)
      .skip((page - 1) * limit)
      .take(limit);

    const [data, total] = await qb.getManyAndCount();

    return {
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
