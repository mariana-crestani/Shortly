import dotenv from "dotenv";
dotenv.config();
import pg from "pg";

const { Pool } = pg;

export const connectionDB = new Pool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
});

//quando deployar: ssl: true
