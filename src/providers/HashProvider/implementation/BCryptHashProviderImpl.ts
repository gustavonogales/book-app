import { hash, compare } from 'bcryptjs';
import HashProvider from '../HashProvider';

export class BCryptHashProviderImpl implements HashProvider {
  generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
