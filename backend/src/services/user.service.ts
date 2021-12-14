import { IUserRepository } from '../repositories/user.repository';
import Cryptography from './cryptography.service';
import User, { UserAttributes } from '../models/user.model';

export interface AuthResponse extends UserAttributes {
  token: string;
}

interface UserServiceDependencies {
  cryptography: Cryptography;
  userRepository: IUserRepository;
}

export interface IUserService {
  authenticate(data: Pick<UserAttributes, 'email' | 'password'>): Promise<AuthResponse>;
  create(data: Omit<UserAttributes, 'id'>): Promise<User>;
  list(): Promise<User[]>;
}

export class UserService implements IUserService {
  private cryptography: Cryptography;
  private userRepository: IUserRepository;

  constructor({ cryptography, userRepository }: UserServiceDependencies) {
    this.cryptography = cryptography;
    this.userRepository = userRepository;
  }

  async create(data: Omit<UserAttributes, 'id'>): Promise<User> {
    const {
      email,
      name,
      password,
      surname,
    } = data;

    console.log(password);
    const hashedPassword = await this.cryptography.encrypt(password);
    console.log(hashedPassword);

    return this.userRepository.create({
      email,
      name,
      password: hashedPassword,
      surname,
    });
  }

  async list(): Promise<User[]> {
    return await this.userRepository.list();
  }

  async authenticate({ email, password }: Required<Pick<UserAttributes, 'email' | 'password'>>): Promise<AuthResponse> {
    try {
      const user = await this.userRepository.findByEmailWithPassword(email);

      if (!user.password) {
        throw new Error('Something went wrong');
      }

      const isPasswordCorrect = await this.cryptography.compare(password, user.password);

      if (!isPasswordCorrect) {
        throw new Error('Authentication error');
      }

      return {
        ...user,
        token: 'this is a jwt token',
      };
    } catch (err) {
      throw new Error('Something went wrong');
    }
  }
}
