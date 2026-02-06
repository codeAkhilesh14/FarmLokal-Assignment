import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./config/db";
import { logger } from "./config/logger";
import { ENV } from "./config/env";

AppDataSource.initialize()
  .then(() => {
    app.listen(ENV.PORT, () => {
      logger.info(`Server running on port ${ENV.PORT}`);
    });
  })
  .catch((err) => {
    logger.error("DB Connection Error", err);
  });
