import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import database from "./config/db.js";
// libs
import cors from "cors";
import compression from "compression";

// middlewares
app.use(cors());
app.use(express.json());
app.use(compression());

// routes
import eventRouter from "./routes/event.js";
import emailRouter from "./routes/sendEmail.js";
import parentRouter from "./routes/parent.js";
import parentRegRouter from "./routes/parentReg.js";
import assignRoleRouter from "./routes/assignRole.js";

// usage
app.use("/api", eventRouter);
app.use("/api", emailRouter);
app.use("/api", parentRouter);
app.use("/api", parentRegRouter)
app.use("/api", assignRoleRouter);


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
