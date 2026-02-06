import { Request, Response } from "express";

export const metrics = (req: Request, res: Response) => {
  res.json({
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date()
  });
};
