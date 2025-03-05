app.get('/parent/:id', authenticateUser, async (req, res) => {
    try {
        const { id } = req.params;
        
        // Ensure the logged-in user can only access their own data
        if (req.user.id !== parseInt(id)) {
            return res.status(403).json({ error: 'Unauthorized access' });
        }

        const result = await db.query('SELECT * FROM parents WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Parent not found' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});
