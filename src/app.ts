import express from "express";
import productRoutes from "./routes/product.routes";
import webhookRoutes from "./routes/webhook.routes";
import metricsRoutes from "./routes/metrics.routes";
import { rateLimiter } from "./middlewares/rateLimiter";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

// app.use(rateLimiter);

app.use("/products", productRoutes);
app.use("/webhook", webhookRoutes);
app.use("/metrics", metricsRoutes);

app.use(errorHandler);

export default app;
