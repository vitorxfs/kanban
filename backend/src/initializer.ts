import { IUserParser, UserParser } from './database/parsers/user.parser';
import { IUserRepository, UserRepository } from './repositories/user.repository';
import { IUserService, UserService } from './services/user.service';

let userParser: IUserParser;
export const getUserParser = () => {
  if (!userParser) {
    userParser = new UserParser();
  }

  return userParser;
};

let userRepository: IUserRepository;
export const getUserRepository = () => {
  if (!userRepository) {
    userRepository = new UserRepository({ userParser: getUserParser() });
  }

  return userRepository;
};

let userService: IUserService;
export const getUserService = () => {
  if (!userService) {
    userService = new UserService({ userRepository: getUserRepository() });
  }

  return userService;
};
