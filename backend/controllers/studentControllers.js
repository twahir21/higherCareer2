import database from "../config/db.js";

export const fetchStudents = async (req, res) => {
    try {
        const response = await database.query(`
            SELECT * FROM students   
            `);
    
        if(!response.rows.length === 0) {
            res.status(404).json({ message: "Students are not yet in database" })
        }

        const data = response.rows;

        res.status(200).json({ success: true, data: data, message: "Success" });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}