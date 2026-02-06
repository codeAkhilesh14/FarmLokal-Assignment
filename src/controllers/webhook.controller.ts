import { Request, Response } from "express";
import { isDuplicate } from "../utils/idempotency";
import { logger } from "../config/logger";

export const handleWebhook = async (req: Request, res: Response) => {
  const eventId = req.headers["x-event-id"] as string;

  if (!eventId) {
    return res.status(400).json({ message: "Missing event id" });
  }

  if (await isDuplicate(eventId)) {
    logger.info("Duplicate webhook event ignored");
    return res.status(200).json({ message: "Duplicate ignored" });
  }

  logger.info("Webhook event processed");

  res.status(200).json({ message: "Processed" });
};
