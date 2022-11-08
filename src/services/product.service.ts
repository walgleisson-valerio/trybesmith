import { IProduct } from '../interfaces/IProduct';
import productModel from '../models/product.model';

const create = async (product: IProduct): Promise<IProduct> => {
  const productCreated = await productModel.create(product);

  return productCreated;
};

const getAll = async (): Promise<IProduct[]> => {
  const products = await productModel.getAll();

  return products;
};

export default {
  create,
  getAll,
};