import express from "express";

const joiningRouter = express.Router();


joiningRouter.get("/primary-join", (req, res) => {
    res.render("JoinPri/Primary");
});

joiningRouter.get("/nursery-join", (req, res) => {
    res.render("JoinNur/Nursery");
});

export default joiningRouter;