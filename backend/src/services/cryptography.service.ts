export interface CryptographyAdapter {
  encrypt(value: string): Promise<string>;
  compare(value: string, hash: string): Promise<boolean>;
}

interface CryptographyDependencies {
  adapter: CryptographyAdapter;
}

class Cryptography implements CryptographyAdapter {
  private adapter: CryptographyAdapter;

  constructor({ adapter }: CryptographyDependencies) {
    this.adapter = adapter;
  }

  encrypt(value: string): Promise<string> {
    return this.adapter.encrypt(value);
  }

  compare(value: string, hash: string): Promise<boolean> {
    return this.adapter.compare(value, hash);
  }
}

export default Cryptography;
