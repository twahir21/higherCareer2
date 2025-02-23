import database from "../config/db.js";

// fetch all subjects
export const fetchAllSubjects = async (req, res)  => {
    try {
        const response = await database.query(`
            SELECT * FROM subjects  
            `);
        
        if (!response.ok){
            res.status(404).json({ success: false })
        }
        
    } catch (error) {
        res.status(500).json({ error: error, message: "Internal Server Error" })
    }
}