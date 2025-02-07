import sendEmail from "../config/mailServer.js";

// sendEmail
// ("twahirsoud3@gmail.com",
//      "Job Found",
//       "You won $40,000 and land your first job as computer Engineer"
//     );

import express from "express";

const emailRouter = express.Router();


emailRouter.post("/sendEmail", async (req, res) => {
    const { to, subject, text } = req.body;
  
    if (!to || !subject || !text) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      await sendEmail(to, subject, text);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email", error: error.message });
    }
  });

export default emailRouter;
  