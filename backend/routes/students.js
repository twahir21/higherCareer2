import express from "express";
import { fetchSingleStudent, fetchStudents } from "../controllers/studentControllers.js";

const studentRouter = express.Router();


// fetch all students
studentRouter.get("/students", fetchStudents);

// fetch one student
studentRouter.get("/students/:id", fetchSingleStudent)

export default studentRouter;