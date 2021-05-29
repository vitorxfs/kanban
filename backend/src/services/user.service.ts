import { IUserRepository } from '../repositories/user.repository';

interface UserServiceDependencies {
  userRepository: IUserRepository
}

export interface IUserService extends UserServiceDependencies {

}

export class UserService implements IUserService {
  userRepository: IUserRepository;

  constructor({ userRepository }: UserServiceDependencies) {
    this.userRepository = userRepository;
  }
}
