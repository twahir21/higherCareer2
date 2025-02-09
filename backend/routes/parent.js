import express from "express";
import { 
    deleteParent, 
    fetchAllParents, 
    fetchParent, 
    updateParent
} from "../controllers/parentController.js";

const parentRouter = express.Router();


parentRouter.get("/parents", fetchAllParents);

parentRouter.get("/parents/:id", fetchParent);

parentRouter.delete("/parents/:id", deleteParent);

parentRouter.put("/parents/:id", updateParent);

export default parentRouter;
