import { RateLimiterMemory } from "rate-limiter-flexible";
import { Request, Response, NextFunction } from "express";

const limiter = new RateLimiterMemory({
  points: 10,
  duration: 1
});

export const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith("/webhook")) {
    return next();   // skip rate limit for webhooks
  }

  limiter.consume(req.ip!)
    .then(() => next())
    .catch(() => res.status(429).json({ message: "Too many requests" }));
};