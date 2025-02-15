// create class

export const createClass = async (req, res) => {
    const { classname, stream, capacity, teacher_id } = req.body;
    try {
        await pool.query("INSERT INTO classes (classname, stream, capacity, teacher_id) VALUES ($1, $2, $3, $4)", 
                        [classname, stream, capacity, teacher_id]);
        res.status(200).send("Class Assigned Successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error assigning class");
    }
}