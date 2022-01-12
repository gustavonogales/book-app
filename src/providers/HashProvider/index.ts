import { container } from 'tsyringe';
import HashProvider from './HashProvider';
import { BCryptHashProviderImpl } from './implementation/BCryptHashProviderImpl';

container.registerInstance<HashProvider>(
  'HashProvider',
  container.resolve(BCryptHashProviderImpl),
);
