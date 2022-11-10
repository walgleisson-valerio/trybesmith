import { Router } from 'express';

import productRouter from './product.routes';
import userRouter from './user.routes';
import orderRouter from './order.routes';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

export default router;