export interface UserAttributes {
  id: string;
  name: string;
  surname: string;
  email: string;
}

export interface IUser extends UserAttributes { }
export default class User implements IUser {
  id: string;
  name: string;
  surname: string;
  email: string;

  constructor(attr: UserAttributes) {
    this.id = attr.id;
    this.name = attr.name;
    this.surname = attr.surname;
    this.email = attr.email;
  }
}
