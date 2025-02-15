import express from "express";
import { assignClass, deleteTeachers, 
    fetchAllTeachers, 
    fetchTeacher, 
    updateTeacher 
} from "../controllers/teacherControllers.js";

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


// getting teachers for assign classes
teacherRouter.get('/getTeachers', assignClass);


export default teacherRouter;