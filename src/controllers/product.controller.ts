import { Request, Response } from 'express';
import { IProduct } from '../interfaces/IProduct';
import productService from '../services/product.service';

const create = async (req: Request, res: Response) => {
  const product = req.body as IProduct;
  const productCreated = await productService.create(product);

  res.status(201).json(productCreated);
};

export default {
  create,
};