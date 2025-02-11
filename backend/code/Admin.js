import express from "express";

const adminCodes = express.Router();

adminCodes.get("/admin", (req, res) => {
    res.render("Admin/index", {message: "Admin"});
})

export default adminCodes;