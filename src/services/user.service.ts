import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import userModel from '../models/user.model';

const generateToken = (user: IUser) => jwt
  .sign(user, process.env.JWT_SECRET as string, { algorithm: 'HS256', expiresIn: '1d' });

const create = async (user: IUser) => {
  const userCreated = await userModel.create(user);

  const token = generateToken(userCreated);

  return token;
};

export default {
  create,
};