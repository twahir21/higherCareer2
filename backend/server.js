import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import database from "./config/db.js";
// libs
import cors from "cors"

// middlewares
app.use(cors());
app.use(express.json());

// routes
import eventRouter from "./routes/event.js";

// usage
app.use('/api', eventRouter);

database.connect()
    .then(() => console.log("Database connected successfully"))
    .then(() => {
        const PORT = process.env.PORT;
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => console.log("Error while connecting to the database", err.message))
