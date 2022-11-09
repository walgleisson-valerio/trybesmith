import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/IUser';

const create = async (user: IUser):Promise<IUser> => {
  const { username, classe, level, password } = user;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );

  return { id: insertId, username, classe, level, password };
};

export default {
  create,
};