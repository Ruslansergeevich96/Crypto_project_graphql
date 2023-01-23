const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1",
  database: "cryptoforest_graphql_db",
});

module.exports = { pool };
