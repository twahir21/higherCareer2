import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config()

const sendEmail = async (to, subject, text) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Change this for different providers
      port: 587, // 465 for SSL, 587 for TLS
      secure: false, // Use true for 465 (SSL)
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    let mailOptions = {
      from: `"Your Name" <${process.env.EMAIL_USER}>`,
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
