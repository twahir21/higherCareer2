import database from "../config/db.js";

export const fetchGrades = async (req, res) =>{
    try {
        const response = await database.query(`
            SELECT * FROM grades   
            `)

        const data = response.rows;

        res.status(200).json({ success: true, data: data, message: "Data fetched successfully" })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message, message: "Server is down" })
    }
}