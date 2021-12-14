const UserSchema = `
  type User {
    id: ID!
    name: String!
    surname: String!
    email: String!
  }

  input UserInput {
    name: String!
    surname: String!
    email: String!
    password: String!
  }

  type Query {
    users: [User!]!
    # user(id: ID!): User!
  }

  type Mutation {
    createUser(data: UserInput): User
    # updateUser(id: ID!, data: UserInput): User!
    # deleteUser(id: ID!): Boolean
  }
`;

export default UserSchema;
