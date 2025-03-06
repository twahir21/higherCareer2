import database from "../config/db.js";

export const displayStudents = async (parentId) => {
    try {
        const result = await database.query('SELECT * FROM students WHERE parent_id = $1', [parentId]);
        return result.rows; // Return the student data to the calling function

    } catch (error) {
        console.error('Error fetching students:', error);
        throw new Error('Server error'); // Throw error to be caught in the route handler
    }
};


export const displayTables = async (classname, streamName) => {
    try {
        const result = await database.query(`
            SELECT * FROM timetables
            WHERE class = $1 AND stream = $2
            `, [classname, streamName]);
        if (result.rows.length === 0) {
            console.log("No data found");
            return [];
        }
        return result.rows; // Return the student data to the calling function

    } catch (error) {
        console.error('Error fetching students:', error);
        throw new Error('Server error'); // Throw error to be caught in the route handler
    }
};