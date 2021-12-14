import { merge } from 'lodash';
import userResolver from './user.resolver';

const resolvers = merge(userResolver);

export default resolvers;
