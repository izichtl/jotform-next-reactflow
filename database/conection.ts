import { Pool } from "pg";

let db_con: any

if (!db_con) {
    db_con = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
  });
}

export default db_con