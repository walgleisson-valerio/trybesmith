import { IProduct } from '../interfaces/IProduct';
import productModel from '../models/product.model';

const create = async (product: IProduct): Promise<IProduct> => {
  const productCreated = await productModel.create(product);

  return productCreated;
};

export default {
  create,
};