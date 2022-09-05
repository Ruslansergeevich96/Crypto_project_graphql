const { users } = require("../FakeData");

const createUser = (input) => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};

const resolvers = {
  Query: {
    getAllUsers() {
      // database api
      return users; // database
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
