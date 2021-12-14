import { hash, compare } from 'bcryptjs';

import { CryptographyAdapter } from '../services/cryptography.service';

class BCryptAdapter implements CryptographyAdapter {
  private salt: string | number = '';

  constructor({ salt }: { salt: string | number }) {
    this.salt = salt;
  }

  compare(value: string, hash: string): Promise<boolean> {
    return compare(value, hash);
  }

  encrypt(value: string): Promise<string> {
    return hash(value, this.salt);
  }
}

export default BCryptAdapter;
