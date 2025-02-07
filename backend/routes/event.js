import express from "express";
import { createEvent, 
        deleteEvent, 
        fetchAllEvents, 
        fetchEvent, 
        updateEvent } from "../controllers/eventController.js";

const eventRouter = express.Router();

// ✅ **GET All events**
eventRouter.get("/events", fetchAllEvents);

// ✅ **GET Single events by ID**
eventRouter.get("/events/:id", fetchEvent);

// ✅ **POST Create a New events**
eventRouter.post("/events", createEvent);

// ✅ **PUT Update an events**
eventRouter.put("/events/:id", updateEvent);

// ✅ **DELETE an events**
eventRouter.delete("/events/:id", deleteEvent);

export default eventRouter;