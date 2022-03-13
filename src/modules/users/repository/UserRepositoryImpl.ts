import { PrismaClient, User } from '@prisma/client';
import { UserRepository } from './UserRepository';
import { UserCreatePayload, UserUpdatePayload } from '../types';

export class UserRepositoryImpl implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.prisma.user.findFirst({
      where: {
        email,
      },
    })

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user;
  }

  async create(data: UserCreatePayload): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data,
    });

    return createdUser;
  }

  async update(id: string, data: UserUpdatePayload): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      data,
      where: {
        id,
      },
    }) as User;

    return updatedUser;
  }
}
