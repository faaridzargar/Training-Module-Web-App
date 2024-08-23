import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  // user: process.env.DB_USER,
  // host: process.env.DB_HOST,
  // database: process.env.DB_DATABASE,
  // password: process.env.DB_PASSWORD,
  // port: process.env.DB_PORT,
});

export function connect() { return pool.connect(); }
export function query(text, params) { return pool.query(text, params); }
