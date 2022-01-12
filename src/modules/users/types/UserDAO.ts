import { UserDTO } from './UserDTO';

export type UserDAO = UserDTO & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
}
