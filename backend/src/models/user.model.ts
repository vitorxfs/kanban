export interface UserAttributes {
  id: string;
  name: string;
  surname: string;
  email: string;
}

class User implements UserAttributes {
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
