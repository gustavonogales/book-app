import { Request, Response } from 'express';

export abstract class UserController {
  list: (request: Request, response: Response) => Promise<Response>;

  create: (request: Request, response: Response) => Promise<Response>;

  update: (request: Request, response: Response) => Promise<Response>;
}
