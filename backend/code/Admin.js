import express from "express";
import { displayStudents } from "../controllers/parentProfileControllers.js";

const adminCodes = express.Router();

adminCodes.get("/admin", (req, res) => {
    res.render("Admin/index", {message: "Admin"});
})

adminCodes.get("/parent/:id", async (req, res) => {
    const parentIdDashboard = req.params.id; // Extract parent ID from URL

    // Ensure parentIdDashboard is a valid positive integer
    if (!/^\d+$/.test(parentIdDashboard)) {
        return res.status(400).render("errors/err", {
            title: "Invalid ID",
            message: "The provided parent ID is not valid.",
            errorClass: "invalid-id-error"
        });
    }

    try {
        // Fetch students
        const students = await displayStudents(parentIdDashboard);
        
        console.log("Student count:", students.length); // Debugging

        // If no students found, render the error page
        if (students.length === 0) {
            return res.status(404).render("errors/err", {
                title: "No Students Found",
                message: "No students are associated with this parent.",
                errorClass: "no-students-error"
            });
        }

        // Render the parent page with student data
        res.render("Parent/index", { message: "Parent", students });

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).render("errors/err", {
            title: "Server Error",
            message: "Something went wrong. Please try again later.",
            errorClass: "server-error"
        });
    }
});



adminCodes.get("/teacher", (req, res) => {
    res.render("Teacher/index", { message: "Teacher" })
})

export default adminCodes;