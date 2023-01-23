const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

class User {
  constructor(id, email, password, name, created_at, updated_at) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  static async create(user) {
    const { email, password, name } = user;
    const query = `INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING *`;
    const values = [email, password, name];
    const { rows } = await pool.query(query, values);
    return new User(...rows[0]);
  }
  static async findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = $1`;
    const values = [email];
    const { rows } = await pool.query(query, values);
    if (!rows[0]) {
      return null;
    }
    return new User(...rows[0]);
  }
}

module.exports = { pool };
