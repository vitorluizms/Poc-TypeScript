import dotenv from "dotenv";
import pg, { ClientConfig } from "pg";

dotenv.config();

const { Pool } = pg;

const configDatabase: ClientConfig = {
  connectionString: process.env.DATABASE_URL,
};

if (process.env.NODE_ENV === "production") configDatabase.ssl = true;

const db = new Pool(configDatabase);

export default db;
