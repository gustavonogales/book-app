import { UserCreatePayload, UserView, UserUpdatePayload } from '../types';

export interface UserService {
  create: (data: UserCreatePayload) => Promise<UserView>;
  update: (id: string, data: UserUpdatePayload) => Promise<UserView>;
}
