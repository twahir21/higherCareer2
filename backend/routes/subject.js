import express from "express";
import { assignSubject, fetchAllSubjects } from "../controllers/subjectControllers.js";
const subjectRouter = express.Router();


subjectRouter.get("/subjects", fetchAllSubjects);

subjectRouter.post("/assign-subject", assignSubject);

export default subjectRouter;