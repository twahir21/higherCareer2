import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import database from "./config/db.js";
// libs
import cors from "cors";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

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

// usage for APIs
app.use("/api", eventRouter);
app.use("/api", emailRouter);
app.use("/api", parentRouter);
app.use("/api", parentRegRouter)
app.use("/api", assignRoleRouter);

// Convert ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Serve Admin Page with EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Request counter
let rootRequests = 0;



// Handle requests to "/"
app.use((req, res, next) => {
  if (req.path === "/") {
    rootRequests++;  
  }
  next(); // Move to the next middleware or route handler
});

// API endpoint to send request data to frontend
app.get("/api/req", (req, res) => {
  res.json({ rootRequests });
});

// Serve React frontend from "frontend/dist"
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Serve all pages from React frontend
// Catch-all: Serve React frontend for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});


database.connect()
    .then(() => console.log("Database connected successfully"))
    .then(() => {
        const PORT = process.env.PORT;
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => console.log("Error while connecting to the database", err.message))
