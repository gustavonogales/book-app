import { Router } from 'express';
import { container } from 'tsyringe';
import { UserControllerImpl } from './controller/UserControllerImpl';
import { userSchema } from './schemas';

const userRoutes = Router();
const resource = '/users';
const userController = container.resolve(UserControllerImpl);

userRoutes.post(resource, userSchema.create, userController.create);
userRoutes.get(resource, userController.list);
userRoutes.put(`${resource}/:id`, userSchema.update, userController.update);

export default userRoutes;
