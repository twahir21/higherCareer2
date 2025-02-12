import express from "express";
import { 
    deleteParent, 
    fetchAllParents, 
    fetchParent
} from "../controllers/parentController.js";

const parentRouter = express.Router();


parentRouter.get("/parents", fetchAllParents);

parentRouter.get("/parents/:id", fetchParent);

parentRouter.delete("/parents/:id", deleteParent);


export default parentRouter;
