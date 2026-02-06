// import { AppDataSource } from "../config/db";
// import { Product } from "../models/product.model";

// async function seed() {
//   await AppDataSource.initialize();

//   const repo = AppDataSource.getRepository(Product);

//   for (let i = 0; i < 1000000; i++) {
//     const p = repo.create({
//       name: `Product ${i}`,
//       description: "Sample product",
//       category: i % 2 === 0 ? "fruits" : "vegetables",
//       price: Math.random() * 100,
//       createdAt: new Date(),
//     });

//     await repo.save(p);

//     if (i % 10000 === 0) console.log(i);
//   }

//   process.exit(0);
// }

// seed();
import { AppDataSource } from "../config/db";
import { Product } from "../models/product.model";

async function seed() {
  console.log("Initializing database connection...");

  await AppDataSource.initialize();

  const repo = AppDataSource.getRepository(Product);

  const TOTAL = 50000;
  const BATCH_SIZE = 2000;

  console.log(`Starting to seed ${TOTAL} products in batches of ${BATCH_SIZE}...`);

  let products = [];

  for (let i = 0; i < TOTAL; i++) {
    products.push(
      repo.create({
        name: `Product ${i}`,
        description: "Sample product",
        category: i % 2 === 0 ? "fruits" : "vegetables",
        price: Math.random() * 100,
        createdAt: new Date(),
      })
    );

    // Insert in batch when batch size reached
    if (products.length === BATCH_SIZE) {
      await repo.save(products);
      console.log(`Inserted ${i + 1} records`);
      products = [];
    }
  }

  // Insert remaining records
  if (products.length > 0) {
    await repo.save(products);
    console.log("Inserted remaining records");
  }

  console.log("Seeding completed successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
