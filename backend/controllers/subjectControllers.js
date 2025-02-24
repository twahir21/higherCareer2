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


export const assignSubject = async (req, res) => {
    try {
        const { assignments } = req.body;

        if (!assignments || assignments.length === 0) {
            return res.status(400).json({ message: "Assignments cannot be empty" });
        }

        let formattedAssignments = [];

        for (const { teacher, subject, grade } of assignments) {
            // Fetch Teacher ID
            const teacherResult = await database.query("SELECT id FROM teacher WHERE fullname = $1", [teacher]);
            if (!teacherResult.rows || teacherResult.rows.length === 0) {
                return res.status(404).json({ message: `Teacher '${teacher}' not found` });
            }
            const teacherId = teacherResult.rows[0].id;

            // Fetch Subject ID
            const subjectResult = await database.query("SELECT id FROM subjects WHERE name = $1", [subject]);
            if (!subjectResult.rows || subjectResult.rows.length === 0) {
                return res.status(404).json({ message: `Subject '${subject}' not found` });
            }
            const subjectId = subjectResult.rows[0].id;

            // Fetch Grade ID
            const gradeResult = await database.query("SELECT id FROM grades WHERE name = $1", [grade]);
            if (!gradeResult.rows || gradeResult.rows.length === 0) {
                return res.status(404).json({ message: `Grade '${grade}' not found` });
            }
            const gradeId = gradeResult.rows[0].id;

            // Store the IDs
            formattedAssignments.push(`(${teacherId}, ${gradeId}, ${subjectId})`);
        }

        if (formattedAssignments.length > 0) {
            // Insert all assignments into the database
            const insertQuery = `
                INSERT INTO teacher_assignments (teacher_id, grade_id, subject_id)
                VALUES ${formattedAssignments.join(", ")}
            `;

            await database.query(insertQuery);

            res.status(200).json({ message: "Assignments successfully saved!" });
        } else {
            res.status(400).json({ message: "No valid assignments to save" });
        }

    } catch (error) {
        console.error("Database Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
