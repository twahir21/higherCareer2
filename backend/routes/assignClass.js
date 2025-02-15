import express from "express";
import { createClass } from "../controllers/classController.js";

const classRouter = express.Router();

// CRUD

// create a class
classRouter.post('/assignClass', createClass);



export default classRouter;