import database from "../config/db.js";


// Create table and save to db
export const createTable = async (req, res) => {
    const { class: className, stream, timeSlots, timetable } = req.body;

    try {
        const query = `
            INSERT INTO timetables (class, stream, time_slots, timetable) 
            VALUES ($1, $2, $3::jsonb, $4::jsonb) RETURNING *;
        `;
        const values = [className, stream, JSON.stringify(timeSlots), JSON.stringify(timetable)];
        const result = await database.query(query, values);

        res.json({ message: "Timetable saved successfully!", data: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error saving timetable" });
    }
}

// fetch all tables
export const fetchAllTables = async (req, res) => {
    try {
        const { class: className, stream } = req.query;
        const result = await database.query(
            `SELECT * FROM timetables`
        );

        if (result.rows.length === 0) {
            res.status(404).json({ message: "No timetable found"})
        }
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching timetable' });
    }
}