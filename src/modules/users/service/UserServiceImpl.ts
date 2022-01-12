import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import produce from 'immer';
import AppError from '../../../configs/AppError';
import HashProvider from '../../../providers/HashProvider/HashProvider';
import { UserRepository } from '../repository/UserRepository';
import { UserDTO, User, UserUpdatePayload } from '../types';
import { UserService } from './UserService';

@injectable()
export class UserServiceImpl implements UserService {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,

    @inject('HashProvider')
    private hashProvider: HashProvider,
  ) { }

  async create(data: UserDTO): Promise<User> {
    const foundUser = await this.userRepository.findByEmail(data.email);

    if (foundUser) {
      throw new AppError('User already created');
    }

    const encryptedPassword = await this.hashProvider.generateHash(data.password);

    const payload: UserDTO = {
      ...data,
      password: encryptedPassword,
    }

    const {
      id, active, createdAt, updatedAt, email, name,
    } = await this.userRepository.create(payload)

    const user: User = {
      id, active, createdAt, updatedAt, email, name,
    }

    return user;
  }

  async update(id: string, data: UserUpdatePayload): Promise<User> {
    let isOldPasswordValid = false;
    let isNewPasswordValid = false;

    const foundUser = await this.userRepository.findById(id);

    if (!foundUser) {
      throw new AppError('User not found');
    }

    const changePassword = !!data.oldPassword && !!data.password && !!data.oldPassword

    if (changePassword) {
      isOldPasswordValid = await this.hashProvider.compareHash(
        data.oldPassword!,
        foundUser.password,
      );

      isNewPasswordValid = data.password === data.passwordConfirmation;

      if (!isOldPasswordValid) {
        throw new AppError('Incorrect Password');
      }

      if (!isNewPasswordValid) {
        throw new AppError('Password confirmation must be correct');
      }
    }

    const payload = await produce(data, async (draft) => {
      if (changePassword) {
        const encryptedPassword = await this.hashProvider.generateHash(data.password!);
        draft.password = encryptedPassword;
      } else {
        delete draft.password;
      }
      delete draft.oldPassword;
      delete draft.passwordConfirmation;
    });

    const {
      active, createdAt, updatedAt, email, name,
    } = await this.userRepository.update(id, payload)

    const user: User = {
      id, active, createdAt, updatedAt, email, name,
    }

    return user;
  }
}
