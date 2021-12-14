import { getUserService } from '../../initializer';
import { UserAttributes } from '../../models/user.model';

const userService = getUserService();

export default {
  Query: {
    users: async () => {
      try {
        return await userService.list();
      } catch (err) {
        throw new Error(err.message); // TODO: Create Custom Errors
      }
    },
  },
  Mutation: {
    authenticate: async (_: any, { data }: { data: Required<Pick<UserAttributes, 'email' | 'password'>>}) => {
      try {
        return await userService.authenticate(data);
      } catch (err) {
        throw new Error(err.message);
      }
    },
    createUser: async (_: any, { data }: { data: Omit<UserAttributes, 'id'> }) => {
      try {
        return await userService.create(data);
      } catch (err) {
        throw new Error(err.message);
      }
    },
  },
};
