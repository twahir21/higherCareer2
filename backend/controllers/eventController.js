import database from "../config/db.js";

// 🕒 Helper function to calculate "time ago"
const getTimeAgo = (date) => {
  const now = new Date();
  const diffMs = now - new Date(date);
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  if (diffMinutes > 0) return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
  return "Just now";
};

// 🔹 Create a new announcement
export const createEvent = async (req, res) => {
  try {
    const { tag, date, month, title, description, class_name } = req.body;

    // Check if the same event already exists
    const existingEvent = await database.query(
      "SELECT * FROM announcements WHERE tag = $1 AND date = $2 AND month = $3 AND title = $4 AND description = $5 AND class_name = $6",
      [tag, date, month, title, description, class_name]
    );

    if (existingEvent.rows.length > 0) {
      return res.status(400).json({ message: "Duplicate event already exists!" });
    }

    // Insert the event if no duplicate is found
    const result = await database.query(
      "INSERT INTO announcements (tag, date, month, title, description, class_name) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [tag, date, month, title, description, class_name]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// 🔹 Fetch all announcements
export const fetchAllEvents = async (req, res) => {
  try {
    const result = await database.query("SELECT * FROM announcements ORDER BY created_at DESC");
    const announcements = result.rows.map((row) => ({
      ...row,
      timeAgo: getTimeAgo(row.created_at),
    }));
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Fetch a single announcement by ID
export const fetchEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await database.query("SELECT * FROM announcements WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    const announcement = result.rows[0];
    announcement.timeAgo = getTimeAgo(announcement.created_at);

    res.json(announcement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Delete an announcement
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await database.query("DELETE FROM announcements WHERE id = $1 RETURNING *", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    res.json({ message: "Announcement deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Update an announcement
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { tag, date, month, title, description, className } = req.body;

    const result = await database.query(
      "UPDATE announcements SET tag = $1, date = $2, month = $3, title = $4, description = $5, class_name = $6 WHERE id = $7 RETURNING *",
      [tag, date, month, title, description, className, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
