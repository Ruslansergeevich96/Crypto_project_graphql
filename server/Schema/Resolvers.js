const { UserList } = require("../FakeData");

const createUser = (input) => {
  const id = date.now();
  return {
    id,
    ...input,
  };
};

const resolvers = {
  Query: {
    getAllUsers() {
      // database api
      return UserList; // database
    },
    getUser: ({ id }) => {
      return users.find((user) => user.id == id);
    },
  },
  Mutation: {
    createUser: ({ input }) => {
      const user = createUser(input);
      users.push(user);
      return user;
    },
  },
};

module.exports = { resolvers };
