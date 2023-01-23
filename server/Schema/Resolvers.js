const { buildSchemaFromTypeDefinitions } = require("apollo-server-express");
const { BreakingChangeType } = require("graphql");
const { user } = require("../FakeData");

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
    async register(parent, args, context, info) {
      const { email, password, name } = args;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ email, password: hashedPassword, name });
      return user;
    },
  },
  Mutation: {
    async login(parent, args, context, info) {
      const { email, password } = args;
      const user = await User.findByEmail(email);
      if (!user) {
        throw new Error("Invalid login");
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid login");
      }
      //create and return the JWT token
    },
  },
};

module.exports = { resolvers };
