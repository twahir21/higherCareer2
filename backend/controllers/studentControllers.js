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

// fetch a single student
export const fetchSingleStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await database.query(`
            SELECT * FROM students 
            WHERE id = $1       
            `, [id]);
        if (response.rows.length === 0) {
            res.status(404).json({ message: "Student not found in Database" });
            return;
        }
        const data = response.rows;

        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ message: error.message })  
    }
}


// delete a student
export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await database.query(`
            DELETE FROM students 
            WHERE id = $1      
            `, [id]);
        
        if (response.rows.length === 0){
            res.status(404).json({ message: "Student not found in database" });
            return;
        }

        const data = response.rows;

        res.status(200).json({ data: data });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { stream } = req.body;

    try {
        const response = await database.query(`
            UPDATE students 
            SET stream = $1
            WHERE id = $2
            RETURNING *;
        `, [stream, id]);

        if (response.rows.length === 0) {
            return res.status(404).json({ message: "Student not found in database" });
        }

        res.status(200).json({ message: "Stream updated successfully", data: response.rows[0] });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// fetch each class contains how many students
export const totalCountStudents = async (req, res) => {
    try {
        const response = await database.query(`
            SELECT class, COUNT(*) AS total_students
            FROM students
            WHERE class IN ('kg1', 'kg2', 'standard1', 'standard2', 'standard3', 'standard4', 'standard5', 'standard6', 'standard7')
            GROUP BY class
            ORDER BY class;
        `);

        if (response.rows.length === 0) {
            return res.status(404).json({ message: "No student found in database" });
        }

        res.status(200).json({ data: response.rows });

    }   catch (error) {        
        res.status(500).json({ message: error.message });
    }
}