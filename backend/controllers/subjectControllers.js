import database from "../config/db.js";

export const fetchAllSubjects = async (req, res) => {
    try {
        const response = await database.query("SELECT * FROM subjects");
        
        return res.status(200).json({ success: true, data: response.rows, message: "Subjects fetched successfully" });

    } catch (error) {
        console.error("DB Query Error:", error.message); // Debugging
        return res.status(500).json({ error: error.message, message: "Internal Server Error" });
    }
};
