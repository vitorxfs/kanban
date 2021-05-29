import { ApolloServer } from 'apollo-server';

import { typeDefs, resolvers } from './graphql';
import configDB from './database/config';

configDB();

const app = new ApolloServer({ typeDefs, resolvers });

export default app;
