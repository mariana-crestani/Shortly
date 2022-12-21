import dotenv from "dotenv";
dotenv.config();
import pg from "pg";

const { Pool } = pg;
/*
const connectionDB = new Pool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
});
*/
const connectionDB = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

export default connectionDB;
