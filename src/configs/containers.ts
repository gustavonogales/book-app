import { container } from 'tsyringe';
import { UserServiceImpl } from '../modules/users/service/UserServiceImpl';
import { UserService } from '../modules/users/service/UserService';
import { UserRepositoryImpl } from '../modules/users/repository/UserRepositoryImpl';
import { UserRepository } from '../modules/users/repository/UserRepository';
import '../providers';

container.registerSingleton<UserRepository>(
  'UserRepository',
  UserRepositoryImpl,
);

container.registerSingleton<UserService>(
  'UserService',
  UserServiceImpl,
);
