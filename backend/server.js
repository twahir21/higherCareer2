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
import emailRouter from "./routes/sendEmail.js";
// usage
app.use('/api', eventRouter);
app.use("/api", emailRouter);


// Request counter
let rootRequests = 0;


// Handle requests to "/"
app.get("/", (req, res) => {
    rootRequests++;
    res.sendStatus(204); // No content response
  });  

// API endpoint to send request data to frontend
app.get("/api/req", (req, res) => {
  res.json({ rootRequests });
});

database.connect()
    .then(() => console.log("Database connected successfully"))
    .then(() => {
        const PORT = process.env.PORT;
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => console.log("Error while connecting to the database", err.message))
