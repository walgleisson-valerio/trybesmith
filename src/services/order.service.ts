import { IOrder } from '../interfaces/IOrder';
import orderModel from '../models/order.model';

const getAll = async ():Promise<IOrder[]> => {
  const orders = await orderModel.getAll();

  return orders;
};

export default {
  getAll,
};