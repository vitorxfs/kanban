import { IUserParser } from '../database/parsers/user.parser';
import { User as UserDb, UserDbAttributes } from '../database/schemas/user';
import User, { UserAttributes } from '../models/user.model';

interface UserRepositoryDependencies {
  userParser: IUserParser;
}

export interface IUserRepository extends UserRepositoryDependencies {
  create(data: Omit<UserAttributes, 'id'>): Promise<User>;
  findByEmailWithPassword(email: UserAttributes['email']): Promise<User>;
  list(): Promise<User[]>;
};

export class UserRepository implements IUserRepository {
  userParser: IUserParser;

  constructor({ userParser }: UserRepositoryDependencies) {
    this.userParser = userParser;
  }

  async create(data: Omit<UserAttributes, 'id'>): Promise<User> {
    const result = await UserDb.create(data);

    return this.userParser.parse(result);
  }

  async findByEmailWithPassword(email: UserAttributes['email']): Promise<User> {
    try {
      const result = await UserDb.findOne({ email }).select('+password');

      return this.userParser.parse(result);
    } catch (err) {
      throw new Error('User not found');
    }
  }

  async list(): Promise<User[]> {
    const result = await UserDb.find();

    return result.map((user: UserDbAttributes) => this.userParser.parse(user));
  }
}
