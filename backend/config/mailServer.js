import nodemailer from "nodemailer";

import dotenv from "dotenv";
dotenv.config();

const sendEmail = async (to, subject, text) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail", // Use "gmail", "outlook", or SMTP service
      auth: {
        user: process.env.EMAIL, // Your email
        pass: process.env.EMAIL_PSWD, // Your email app password
      },
    });

    let mailOptions = {
      from: `HigherCareer <${process.env.EMAIL}> `, //Your name <your-email@gmail.com>
      to: to,
      subject: subject,
      text: text,
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail