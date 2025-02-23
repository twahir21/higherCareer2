import express from "express";
import { fetchGrades } from "../controllers/gradeControllers.js";

const gradeRouter = express.Router();

gradeRouter.get("/grades", fetchGrades);


export default gradeRouter;