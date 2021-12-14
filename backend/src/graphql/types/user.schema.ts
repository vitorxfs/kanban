const UserSchema = `
  type User {
    email: String!
    id: ID!
    name: String!
    surname: String!
    token: String
  }

  input UserInput {
    email: String!
    name: String!
    password: String!
    surname: String!
  }

  input AuthenticationInput {
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
    # user(id: ID!): User!
  }

  type Mutation {
    authenticate(data: AuthenticationInput): User!
    createUser(data: UserInput): User
    # updateUser(id: ID!, data: UserInput): User!
    # deleteUser(id: ID!): Boolean
  }
`;

export default UserSchema;
