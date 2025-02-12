import express from "express";
import { deleteTeachers, updateTeacher } from "../controllers/teacherControllers";

const teacherRouter = express.Router();

// cruds routes


// fetch all
teacherRouter.get("/teachers");
// fetch one
teacherRouter.get("/teachers/:id");

// delete
teacherRouter.delete("/teachers/:id", deleteTeachers);

// update
teacherRouter.patch("/teachers/:id", updateTeacher)