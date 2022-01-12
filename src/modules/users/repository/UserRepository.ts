import { UserDAO, UserDTO, UserUpdatePayload } from '../types';

export interface UserRepository {
  create(data: UserDTO): Promise<UserDAO>;
  update(id: string, data: UserUpdatePayload): Promise<UserDAO>;
  findByEmail(email: string): Promise<UserDAO | null>;
  findById(id: string): Promise<UserDAO | null>;
}
