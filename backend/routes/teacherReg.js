import express from "express";
import { deleteTeachers, fetchAllTeachers, fetchTeacher, updateTeacher } from "../controllers/teacherControllers";

const teacherRouter = express.Router();

// cruds routes


// fetch all
teacherRouter.get("/teachers", fetchAllTeachers);
// fetch one
teacherRouter.get("/teachers/:id", fetchTeacher);

// delete
teacherRouter.delete("/teachers/:id", deleteTeachers);

// update
teacherRouter.patch("/teachers/:id", updateTeacher);

export default teacherRouter;