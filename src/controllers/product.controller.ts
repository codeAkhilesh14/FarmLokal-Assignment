import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export const getProducts = async (req: Request, res: Response) => {
  const data = await ProductService.getProducts(req.query);
  res.json(data);
};
