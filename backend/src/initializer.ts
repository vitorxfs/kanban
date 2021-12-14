import { IUserParser, UserParser } from './database/parsers/user.parser';
import { IUserRepository, UserRepository } from './repositories/user.repository';
import { IUserService, UserService } from './services/user.service';
import BCryptAdapter from './adapters/bcrypt.adapter';
import Cryptography, { CryptographyAdapter } from './services/cryptography.service';

let cryptographyAdapter: CryptographyAdapter;
const getCryptographyAdapter = (): CryptographyAdapter => {
  if (!cryptographyAdapter) {
    cryptographyAdapter = new BCryptAdapter({ salt: 10 });
  }

  return cryptographyAdapter;
};

let cryptographyService: Cryptography;
const getCryptographyService = (): Cryptography => {
  if (!cryptographyService) {
    cryptographyService = new Cryptography({ adapter: getCryptographyAdapter() });
  }

  return cryptographyService;
};

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
    userService = new UserService({ userRepository: getUserRepository(), cryptography: getCryptographyService() });
  }

  return userService;
};
