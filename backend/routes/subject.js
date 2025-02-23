import express from "express";
import { fetchAllSubjects } from "../controllers/subjectControllers.js";
const subjectRouter = express.Router();


subjectRouter.get("/subjects", fetchAllSubjects);

export default subjectRouter;