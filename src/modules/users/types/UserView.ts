import { User } from '@prisma/client';
import { Identity } from '../../core/types/Identity';

export type UserView = Identity & Omit<User, 'password'>;
