import express from "express";
const teacherRegRouter = express.Router();

import path from "path";
import { saveToJSONFile } from "./hashSave.js";
import { fileURLToPath } from "url";
import { body, validationResult } from "express-validator";
import checkUniqueUsername from "../middlewares/uniqueUsername.js";

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


teacherRegRouter.post(
    '/auth/teacher-register',
    [
        body('teacher_UserName')
            .isAlphanumeric().withMessage('Username should only contain letters and numbers')
            .trim().escape(),
        body('teacher_password')
            .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
            .trim().escape(),
        body('teacher_email').isEmail().withMessage('Invalid email format').normalizeEmail(),
        body('teacher_tel').isMobilePhone().withMessage('Invalid phone number').trim().escape(),
        body('qualifications').notEmpty().withMessage('Qualification is required').trim().escape(),
        body('teacher_fullName').notEmpty().withMessage('Your full name is required').trim().escape(),
        body('subject').notEmpty().withMessage('Subject Taught field is required').trim().escape(),
    ],
    async (req, res, next) => {
        // Middleware to check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, message: errors.array()[0].msg, redirect: "/teacher-register" });
        }

        // Middleware to check for unique username
        try {
            const { teacher_UserName } = req.body;
            const isUnique = await checkUniqueUsername(teacher_UserName);
            if (!isUnique) {
                return res.status(409).json({
                    success: false,
                    message: "Username is already taken, try by adding numbers",
                    redirect: "/teacher-register"
                });
            }
            next(); // Proceed to the next handler if username is unique
        } catch (error) {
            console.error('Error in username uniqueness check:', error);
            return res.status(500).json({
                success: false,
                message: 'An error occurred while checking username uniqueness.',
                redirect: "/teacher-register"
            });
        }
    },
    async (req, res) => {
        const { 
            teacher_UserName: username, 
            teacher_password: password, 
            teacher_fullName: fullName, 
            teacher_email: email, 
            teacher_tel: tel, 
            qualifications, 
            subject: subjectTaught 
        } = req.body;

        const filePath = path.join(__dirname, 'json', 'tempUsers.json');

        const newUser = {
            username,
            password,
            fullName,
            email,
            tel,
            qualifications,
            subjectTaught,
            isApproved: false,
            isVerified: false,
            createdAt: new Date().toISOString(),
        };

        try {
            const result = await saveToJSONFile(newUser, filePath);

            if (result.success) {
                return res.status(200).json({
                    success: true,
                    message: result.message,
                    redirect: "/login"
                });
            } else {
                return res.status(409).json({
                    success: false,
                    message: result.message,
                    redirect: "/teacher-register"
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: 'An error occurred while processing the request.',
                redirect: "/"
            });
        }
    }
);

export default teacherRegRouter;