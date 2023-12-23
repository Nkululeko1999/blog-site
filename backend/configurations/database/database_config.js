import "dotenv/config";
import Pool from 'pg';

// Configure the database connection

const PoolConstructor = Pool.Pool;
export const pool = new PoolConstructor({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  host: process.env.POSTGRES_HOST,
  port: process.env.PORT_DB || 5432,
  database: process.env.POSTGRES_DATABASE
});

