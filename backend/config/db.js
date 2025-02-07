import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const database = new Pool ({
    user: process.env.USER,
    password: process.env.PSWD,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

export default database;