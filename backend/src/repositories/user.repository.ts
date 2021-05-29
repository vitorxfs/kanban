import { IUserParser } from '../database/parsers/user.parser';

interface UserRepositoryDependencies {
  userParser: IUserParser;
}

export interface IUserRepository extends UserRepositoryDependencies {

};

export class UserRepository implements IUserRepository {
  userParser: IUserParser;

  constructor({ userParser }: UserRepositoryDependencies) {
    this.userParser = userParser;
  }
}
