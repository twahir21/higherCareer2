import express from "express";
import { createClass, 
    deleteClass, 
    getAllClasses, 
    updateClass
 } from "../controllers/classController.js";

const classRouter = express.Router();

// CRUD

// create a class
classRouter.post('/assignClass', createClass);

// get all classes
classRouter.get("/getClasses", getAllClasses)

// DELETE CLASS
classRouter.delete("/deleteClass/:id", deleteClass);

// UPDATE
classRouter.put("/updateClass/:id", updateClass);



export default classRouter;