import 'reflect-metadata';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import { UserServiceImpl } from '../service/UserServiceImpl';
import { UserController } from './UserController';

export class UserControllerImpl implements UserController {
  async list(request: Request, response: Response): Promise<Response> {
    return response.json([]);
  }

  async create(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, name, password } = request.body;

    const userService = container.resolve(UserServiceImpl);

    const createdUser = await userService.create({ email, name, password });

    return response.status(StatusCodes.OK).json(createdUser);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const payload = request.body;
    console.log({ got: payload });

    const userService = container.resolve(UserServiceImpl);

    const updatedUser = await userService.update(id, payload);

    return response.status(StatusCodes.OK).json(updatedUser);
  }
}
