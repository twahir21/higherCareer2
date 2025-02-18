import database from "../config/db.js";

// Fetch all parents
export const fetchAllParents = async (req, res) => {
    try {
        const result = await database.query(`
            SELECT id, username, full_name, email, tel, role, is_approved, is_verified, created_at
            FROM parents ORDER BY created_at DESC
        `);
        
        res.status(200).json({ success: true, data: result.rows });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Fetch a single parent
export const fetchParent = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await database.query(`
            SELECT id, username, full_name, email, tel, role, is_approved, is_verified, created_at
            FROM parents WHERE id = $1
        `, [id]);
    
        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: "Parent not found" });
        }

        res.status(200).json({ success: true, data: result.rows[0] });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete parent
export const deleteParent = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await database.query(`
            DELETE FROM parents WHERE id = $1 RETURNING *
        `, [id]);
        
        if (result.rowCount === 0) {
            return res.status(404).json({ success: false, message: "Parent not found" });
        }

        res.status(200).json({ success: true, message: "Parent deleted successfully" });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
