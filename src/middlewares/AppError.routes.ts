/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import AppError from '../configs/AppError';

export default async function appError(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Promise<Response> {
  console.log('>>>>>>', error);
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
