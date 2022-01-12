import { Router } from 'express';
import appError from '../middlewares/AppError.routes';
import booksRoutes from '../modules/books/routes';
import userRoutes from '../modules/users/routes';

export const routes = Router();

routes.use(userRoutes);
routes.use(booksRoutes);
routes.use(appError);
