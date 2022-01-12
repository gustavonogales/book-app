import { UserDTO, User } from '../types';

export interface UserService {
  create: (data: UserDTO) => Promise<User>;
  update: (id: string, data: UserDTO) => Promise<User>;
}
