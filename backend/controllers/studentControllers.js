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
        // Start a transaction
        await database.query('BEGIN');

        // Step 1: Fetch the student's class and stream
        const fetchStudentQuery = `
            SELECT class, stream FROM students WHERE id = $1;
        `;
        const studentResult = await database.query(fetchStudentQuery, [id]);

        if (studentResult.rows.length === 0) {
            await database.query('ROLLBACK');
            return res.status(404).json({ message: "Student not found in database" });
        }

        const className = studentResult.rows[0].class; // Get the class
        const stream = studentResult.rows[0].stream; // Get the stream

        // Step 2: Delete the student
        const deleteStudentQuery = `
            DELETE FROM students 
            WHERE id = $1
            RETURNING *;
        `;
        const deleteResponse = await database.query(deleteStudentQuery, [id]);

        if (deleteResponse.rows.length === 0) {
            await database.query('ROLLBACK');
            return res.status(404).json({ message: "Student not found in database" });
        }

        // Step 3: Decrement current_count in the classes table
        const decrementCountQuery = `
            UPDATE classes
            SET current_count = current_count - 1
            WHERE classname = $1 AND stream = $2
            RETURNING *;
        `;
        const classResponse = await database.query(decrementCountQuery, [className, stream]);

        if (classResponse.rows.length === 0) {
            await database.query('ROLLBACK');
            return res.status(404).json({ message: "Class or stream not found in database" });
        }

        // Commit the transaction
        await database.query('COMMIT');

        // Success response
        res.status(200).json({
            message: "Student deleted and class count decremented successfully",
            student: deleteResponse.rows[0],
            class: classResponse.rows[0],
        });

    } catch (error) {
        await database.query('ROLLBACK');
        res.status(500).json({ message: error.message });
    }
};

export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { stream } = req.body; // Destructure stream from the request body

    try {
        // Step 1: Fetch the student's current class
        const fetchStudentQuery = `
            SELECT class FROM students WHERE id = $1;
        `;
        const studentResult = await database.query(fetchStudentQuery, [id]);

        if (studentResult.rows.length === 0) {
            return res.status(404).json({ message: "Student not found in database" });
        }

        const className = studentResult.rows[0].class; // Get the class from the fetched student data

        // Step 2: Update the student's stream
        const updateStudentQuery = `
            UPDATE students 
            SET stream = $1
            WHERE id = $2
            RETURNING *;
        `;
        const studentResponse = await database.query(updateStudentQuery, [stream, id]);

        if (studentResponse.rows.length === 0) {
            return res.status(404).json({ message: "Student not found in database" });
        }

        // Step 3: Increment the current_count in the classes table
        const incrementCountQuery = `
            UPDATE classes
            SET current_count = current_count + 1
            WHERE classname = $1 AND stream = $2
            RETURNING *;
        `;
        const classResponse = await database.query(incrementCountQuery, [className, stream]);

        if (classResponse.rows.length === 0) {
            return res.status(404).json({ message: "Class or stream not found in database" });
        }

        // Success response
        res.status(200).json({
            message: "Stream updated and class count incremented successfully",
            student: studentResponse.rows[0],
            class: classResponse.rows[0],
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
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