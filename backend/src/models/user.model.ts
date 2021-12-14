export interface UserAttributes {
  email: string;
  id: string;
  name: string;
  password: string;
  surname: string;
}

export interface IUser extends UserAttributes { }
export default class User implements IUser {
  email: string;
  id: string;
  name: string;
  password: string;
  surname: string;

  constructor(attr: UserAttributes) {
    this.email = attr.email;
    this.id = attr.id;
    this.name = attr.name;
    this.password = attr.password;
    this.surname = attr.surname;
  }
}
