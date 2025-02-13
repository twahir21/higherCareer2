import express from "express";

const joiningRouter = express.Router();


joiningRouter.get("/primary-join", (req, res) => {
    res.render("JoinPri/Primary");
});

export default joiningRouter;