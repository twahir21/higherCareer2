import express from "express";
import { fetchStudents } from "../controllers/studentControllers.js";

const studentRouter = express.Router();


// fetch all students
studentRouter.get("/students", fetchStudents);

export default studentRouter;