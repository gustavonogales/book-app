import { PrismaClient } from '@prisma/client';
import { UserRepository } from './UserRepository';
import { UserDAO, UserDTO, UserUpdatePayload } from '../types';

export class UserRepositoryImpl implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByEmail(email: string): Promise<UserDAO | null> {
    const user = this.prisma.user.findFirst({
      where: {
        email,
      },
    })

    return user;
  }

  async findById(id: string): Promise<UserDAO | null> {
    const user = this.prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user;
  }

  async create(data: UserDTO): Promise<UserDAO> {
    const createdUser = await this.prisma.user.create({
      data,
    }) as UserDAO;

    return createdUser;
  }

  async update(id: string, data: UserUpdatePayload): Promise<UserDAO> {
    const updatedUser = await this.prisma.user.update({
      data,
      where: {
        id,
      },
    }) as UserDAO;

    return updatedUser;
  }
}
