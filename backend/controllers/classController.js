// create class
import database from "../config/db.js";

export const createClass = async (req, res) => {
    const { classname, stream, capacity, teacher_name } = req.body;
    try {
        await database.query(
            "INSERT INTO classes (classname, stream, capacity, teacher_name) VALUES ($1, $2, $3, $4)", 
            [classname, stream, capacity, teacher_name]
        );
        res.status(200).json({ success: true, message: "Class Assigned Successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error while assigning a class");
    }
};
