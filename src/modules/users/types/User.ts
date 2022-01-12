import { UserDAO } from './UserDAO';

export type User = Omit<UserDAO, 'password'> & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
}
