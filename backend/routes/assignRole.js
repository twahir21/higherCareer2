import express from "express";
import { 
    deleteUser, 
    fetchAllUsers, 
    updateUserRole 
} from "../controllers/assignRoleController";

const assignRoleRouter = express.Router();


// Route to fetch all users
assignRoleRouter.get('/users', fetchAllUsers);

// Route to update user approval status and assign role
assignRoleRouter.patch('/users/:username', updateUserRole);


// DELETE route to delete a user by username
assignRoleRouter.delete('/users/:username', deleteUser);

export default assignRoleRouter
