import express from "express";
import { createTable, fetchAllTables } from "../controllers/timetableController.js";

const timetableRouter = express.Router();

// Create timetable 
timetableRouter.post('/saveTimetable', createTable);

// fetch all tables
timetableRouter.get('/getTimetable', fetchAllTables);

export default timetableRouter;