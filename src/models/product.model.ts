import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const getAll = async ():Promise<IProduct[]> => {
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Products',
  );

  return rows;
};

export default {
  create,
  getAll,
};