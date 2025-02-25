import express from "express";

import { 
    deleteStudent, 
    fetchSingleStudent, 
    fetchStudents, 
    updateStudent 
} from "../controllers/studentControllers.js";

const studentRouter = express.Router();


// fetch all students
studentRouter.get("/students", fetchStudents);

// fetch one student
studentRouter.get("/students/:id", fetchSingleStudent);

// delete
studentRouter.delete("/students/:id", deleteStudent);

// update
studentRouter.put("/students/:id", updateStudent)

export default studentRouter;