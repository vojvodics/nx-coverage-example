import { libB } from '@init/lib-b';

export function libA(): string {
  return 'lib-a' + libB();
}
