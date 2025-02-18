import database from "../config/db.js";

// Create a class
export const createClass = async (req, res) => {
    const { classname, stream, capacity, teacher_name } = req.body;
    try {
        await database.query(
            "INSERT INTO classes (classname, stream, capacity, teacher_name) VALUES ($1, $2, $3, $4)", 
            [classname, stream, capacity, teacher_name]
        );
        res.status(200).json({ success: true, message: "Class assigned successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error while assigning a class" });
    }
};

// Get all classes
export const getAllClasses = async (req, res) => {
    try {
        const result = await database.query(`
            SELECT id, classname, stream, capacity, current_count, teacher_name, assignedAt 
            FROM classes ORDER BY assignedAt DESC
        `);

        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: "No class found!" });
        }

        res.status(200).json({ success: true, data: result.rows });

    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error!" });
    }
};

// Delete a class
export const deleteClass = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await database.query(`
            DELETE FROM classes WHERE id = $1 RETURNING *
        `, [id]);
        
        if (result.rowCount === 0) {
            return res.status(404).json({ success: false, message: "Class not found" });
        }

        res.status(200).json({ success: true, message: "Class deleted successfully" });

    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error!" });
    }   
};

// Update a class
export const updateClass = async (req, res) => {
    const { id } = req.params;
    const { classname, stream, capacity, teacher_name } = req.body;

    try {
        const result = await database.query(
            `UPDATE classes 
            SET classname = $1, stream = $2, capacity = $3, teacher_name = $4
            WHERE id = $5 RETURNING *`,
            [classname, stream, capacity, teacher_name, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ success: false, message: "Class not found" });
        }

        res.status(200).json({ success: true, message: "Class updated successfully", updatedClass: result.rows[0] });

    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};
