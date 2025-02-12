import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = 5000;

// PostgreSQL Connection
import pool from "./db.js";

// Middleware
app.use(express.json());

// Convert ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html
app.get("/", (req, res) => {
  console.log("good server")
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Fetch teachers with pagination, search, and sorting
app.get("/api/teachers", async (req, res) => {
  try {
    let { page = 1, limit = 5, search = "", sortBy = "id", order = "asc" } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);
    const offset = (page - 1) * limit;

    let query = `SELECT * FROM testing WHERE name ILIKE $1 ORDER BY ${sortBy} ${order} LIMIT $2 OFFSET $3`;
    let totalQuery = `SELECT COUNT(*) FROM testing WHERE name ILIKE $1`;

    const { rows } = await pool.query(query, [`%${search}%`, limit, offset]);
    const totalResult = await pool.query(totalQuery, [`%${search}%`]);

    const totalPages = Math.ceil(totalResult.rows[0].count / limit);

    res.json({
      data: rows,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
