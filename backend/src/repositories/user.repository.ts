import { IUserParser } from '../database/parsers/user.parser';
import { User as UserDb } from '../database/schemas/user';
import User, { UserAttributes } from '../models/user.model';

interface UserRepositoryDependencies {
  userParser: IUserParser;
}

export interface IUserRepository extends UserRepositoryDependencies {
  create(data: Omit<UserAttributes, 'id'>): Promise<User>;
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
}
