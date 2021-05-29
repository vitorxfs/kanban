const userMockedData = [
  {
    _id: String(Math.random()),
    name: 'Vitor',
    surname: 'Sanches',
    email: 'vitorsanches@blebers.com',
  },
  {
    _id: String(Math.random()),
    name: 'Vitor',
    surname: 'Sanches',
    email: 'vitorsanches2@blebers.com',
  },
  {
    _id: String(Math.random()),
    name: 'Vitor',
    surname: 'Sanches',
    email: 'vitorsanches3@blebers.com',
  }
]

export default {
  Query: {
    users: () => userMockedData,
  },
  Mutation: {},
};
