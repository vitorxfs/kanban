import { getUserService } from '../../initializer';
import { UserAttributes } from '../../models/user.model';

const userService = getUserService();

export default {
  Query: {
    users: async () => {
      try {
        return await userService.list();
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
  Mutation: {
    createUser: async (_: any, { data }: { data: Omit<UserAttributes, 'id'> }) => {
      try {
        return await userService.create(data);
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
};
