require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const { pool } = require("./Models/user");

const PORT = process.env.PORT || 5000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    pool,
  },
});

server.applyMiddleware({ app });

app.use(cors());

const start = async () => {
  try {
    const result = await pool.query("SELECT 1");
    console.log("Подключение к базе данных успешно");

    app.get("/", function (req, res) {
      res.send("Hello Ruslan!");
    });

    app.listen(PORT, function (err) {
      if (!err)
        console.log(
          `Crypto Server (cryptoforest_graphql) started on PORT = ${PORT}`
        );
      else console.log(err);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
