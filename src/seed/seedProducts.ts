import { AppDataSource } from "../config/db";
import { Product } from "../models/product.model";

async function seed() {
  await AppDataSource.initialize();

  const repo = AppDataSource.getRepository(Product);

  for (let i = 0; i < 1000000; i++) {
    const p = repo.create({
      name: `Product ${i}`,
      description: "Sample product",
      category: i % 2 === 0 ? "fruits" : "vegetables",
      price: Math.random() * 100,
      createdAt: new Date(),
    });

    await repo.save(p);

    if (i % 10000 === 0) console.log(i);
  }

  process.exit(0);
}

seed();
