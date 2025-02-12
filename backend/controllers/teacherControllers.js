import database from "../config/db.js";

// implementing crud
// fetch all
export const fetchAllTeachers = async (req, res) => {
    try{
        const result = await database.query(`
                SELECT * FROM teacher 
                ORDER BY createdat DESC   
            `);
        const data = result.rows;
        res.status(200).json({success: true, data: data})
    }catch(err){
        res.status(500).json({success: false, error: "Server is down!"})
    }
}

// fetch one
export const fetchTeacher = async (req, res) => {
    const  { id } = req.params;

    try {
        const result = await database.query(`
            SELECT * FROM teacher
            WHERE id = $1     
            `, [id]);
        
        const data = result.rows[0];

        res.status(200).json({success: true, data: data});

    } catch (error) {
        res.status(500).json({success: false, error: "Server is down!"})
    }
}

// update
export const updateTeacher = async (req, res) => {
    const  { id } = req.params;

    try {

        const result = await database.query(`
            UPDATE FROM teacher
            WHERE id = $1,
            
        `, [id]);

        if(result.rows.length === 0) {
            res.status(404).json({success: false, message: "Failed to update, teacher not found!"})
        }

        res.status(200).json({success: true, message: "Teacher updated successfully"})
        
    } catch (error) {
        res.status(500).json({success: false, error: "Server is down!"})
    }
}

// delete teacher
export const deleteTeachers = async (req, res) => {
    const { id } = req.params;

    try{
        const result = await database.query(`
            DELETE FROM teacher
            WHERE id = $1   
            RETURNING * 
            `, [id])

        if(result.rows.length === 0){
            res.status(404).json({success: false, message: "Teacher you want to delete is missing"})
        }

        res.status(200).json({success: true, message: "Teacher deleted successfully"});
        
    }catch(err) {
        res.status(500).json({success: false, error: "Server is down!"})
    }
}