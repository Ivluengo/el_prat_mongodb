import express from 'express';
import UserController from '../controllers/UserController.js';

const userRouter = express.Router();

userRouter.get('/', UserController.getAll);
userRouter.get('/:userId', UserController.getById);

export { userRouter };
