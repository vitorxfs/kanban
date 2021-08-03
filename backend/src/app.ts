import { ApolloServer } from 'apollo-server';

import { typeDefs, resolvers } from './graphql';
import './database/config';

const app = new ApolloServer({ typeDefs, resolvers });

export default app;
