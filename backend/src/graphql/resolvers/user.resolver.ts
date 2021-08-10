import { getUserService } from '../../initializer';
import { UserAttributes } from '../../models/user.model';

const userService = getUserService();

const userMockedData = [
  {
    id: String(Math.random()),
    name: 'Vitor',
    surname: 'Sanches',
    email: 'vitorsanches@blebers.com',
  },
  {
    id: String(Math.random()),
    name: 'Vitor',
    surname: 'Sanches',
    email: 'vitorsanches2@blebers.com',
  },
  {
    id: String(Math.random()),
    name: 'Vitor',
    surname: 'Sanches',
    email: 'vitorsanches3@blebers.com',
  },
];

export default {
  Query: {
    users: () => userMockedData,
  },
  Mutation: {
    createUser: (_: any, { data }: { data: Omit<UserAttributes, 'id'> }) => {
      try { return userService.create(data); } catch (err) {
        return { erro: 'Não foi possível criar o usuário' };
      }
    },
  },
};
