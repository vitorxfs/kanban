import { UserDbAttributes } from '../schemas/user';
import User from '../../models/user.model';

export interface IUserParser {
  parse(dbModel: UserDbAttributes): User;
}

export class UserParser implements IUserParser {
  parse(dbModel: UserDbAttributes): User {
    const {
      _id,
      email,
      name,
      surname,
    } = dbModel;

    return new User({
      id: _id,
      email,
      name,
      surname,
    });
  }
}
