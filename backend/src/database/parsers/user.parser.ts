import { UserDbAttributes } from '../schemas/user';
import { UserAttributes } from '../../models/user.model';

export interface IUserParser {
  parse(dbModel: UserDbAttributes): UserAttributes;
}

export class UserParser implements IUserParser {
  parse(dbModel: UserDbAttributes): UserAttributes {
    const {
      _id,
      email,
      name,
      surname,
    } = dbModel;

    return {
      id: _id,
      email,
      name,
      surname,
    };
  }
}
