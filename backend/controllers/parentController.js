// creating CRUD for parents (get, put, post, delete)
import database from "../config/db.js";


// fetch all parents
export const fetchAllParents = async (req, res) => {
    try {
        const result = await database.query(`
            SELECT * FROM parent ORDER BY createdat DESC    
        `)
    const data = result.rows;
    res.status(200).json({success: true, data: data});
        
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}


// fetch a single parent
export const fetchParent = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await database.query(`
            SELECT * FROM parent 
            WHERE id = $1    
        `, [id])
    
    const data = result.rows[0];

    if (result.rows.length === 0){
        res.status(404).json({success: false, message: "Product not found"})
    }

    res.status(200).json({success: true, data: data})

    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
}

// delete parent
export const deleteParent = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await database.query(`
                DELETE FROM parent 
                WHERE id = $1
                RETURNING *
            `, [id]);
        
        if (result.rows.length === 0) {
            res.status(404).json({success: false, message: 'Parent not found'})
        }

        res.status(200).json({success: true, message: 'Parent deleted successully'});

    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
}
