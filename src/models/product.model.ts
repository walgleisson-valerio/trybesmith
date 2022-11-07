import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/IProduct';

const create = async (product: IProduct):Promise<IProduct> => {
  const { name, amount } = product;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return { id: insertId, name, amount };
};

export default {
  create,
};