import { User } from '@prisma/client';
import { UserCreatePayload, UserUpdatePayload } from '../types';

export interface UserRepository {
  create(data: UserCreatePayload): Promise<User>;
  update(id: string, data: UserUpdatePayload): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}
