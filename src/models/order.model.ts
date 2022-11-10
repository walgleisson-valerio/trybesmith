import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IOrder } from '../interfaces/IOrder';

const getAll = async ():Promise<IOrder[]> => {
  const [rows] = await connection.execute<IOrder[] & RowDataPacket[]>(
    `SELECT ord.id, userId, JSON_ARRAYAGG(pro.id) AS productsIds
    FROM Trybesmith.Orders AS ord
    INNER JOIN Trybesmith.Products AS pro
    ON pro.orderId = ord.id
    GROUP BY ord.id`,
  );

  return rows;
};

export default {
  getAll,
};