import { Request, Response } from 'express';
import { IUser } from '../interfaces/IUser';
import userService from '../services/user.service';

const create = async (req: Request, res: Response) => {
  const user = req.body as IUser;
  const token = await userService.create(user);

  res.status(201).json({ token });
};

export default {
  create,
};