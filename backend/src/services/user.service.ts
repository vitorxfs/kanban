import { IUserRepository } from '../repositories/user.repository';
import { UserAttributes } from '../models/user.model';

interface UserServiceDependencies {
  userRepository: IUserRepository;
}

export interface IUserService extends UserServiceDependencies {
  create(data: Omit<UserAttributes, 'id'>): Promise<UserAttributes>;
}

export class UserService implements IUserService {
  userRepository: IUserRepository;

  constructor({ userRepository }: UserServiceDependencies) {
    this.userRepository = userRepository;
  }

  async create(data: Omit<UserAttributes, 'id'>): Promise<UserAttributes> {
    return await this.userRepository.create(data);
  }
}
