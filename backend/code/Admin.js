import express from "express";

const adminCodes = express.Router();

adminCodes.get("/admin", (req, res) => {
    res.render("Admin/index", {message: "Admin"});
})

adminCodes.get("/parent", (req, res) => {
    res.render("Parent/index", {message: "Parent"});
});

adminCodes.get("/teacher", (req, res) => {
    res.render("Teacher/index", { message: "Teacher" })
})

export default adminCodes;