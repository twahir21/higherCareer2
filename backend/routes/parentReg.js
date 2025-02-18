import express from "express";
import path from "path";
import { saveToJSONFile } from "./hashSave.js";
import { fileURLToPath } from "url";
import { body, validationResult } from "express-validator";
import checkUniqueUsername from "../middlewares/uniqueUsername.js";

const parentRegRouter = express.Router();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

parentRegRouter.post(
    '/auth/parent-register',
    [
        body('parent_UserName')
            .isAlphanumeric().withMessage('Username should only contain letters and numbers')
            .trim().escape(),
        body('parent_password')
            .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
            .trim().escape(),
        body('parent_email').isEmail().withMessage('Invalid email format').normalizeEmail(),
        body('parent_tel').isMobilePhone().withMessage('Invalid phone number').trim().escape(),
        body('relationship').notEmpty().withMessage('Relationship is required').trim().escape(),
        body('students').isArray({ min: 1 }).withMessage('At least one student is required'),
        body('students.*.fullName').notEmpty().withMessage('Student full name is required').trim().escape(),
        body('students.*.className').notEmpty().withMessage('Student class is required').trim().escape(),
        body('students.*.relationship').notEmpty().withMessage('Student relationship is required').trim().escape(),
    ],
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array()[0].msg,
                redirect: "/parent-register",
            });
        }

        try {
            const { parent_UserName } = req.body;
            const isUnique = await checkUniqueUsername(parent_UserName);
            if (!isUnique) {
                return res.status(409).json({
                    success: false,
                    message: "Username is already taken, try by adding numbers",
                    redirect: "/parent-register",
                });
            }
            next();
        } catch (error) {
            console.error("Error in username uniqueness check:", error);
            return res.status(500).json({
                success: false,
                message: "An error occurred while checking username uniqueness.",
                redirect: "/parent-register",
            });
        }
    },
    async (req, res) => {
        const {
            parent_UserName: username,
            parent_fullName: fullName,
            parent_email: email,
            parent_tel: tel,
            parent_password: password,
            students
        } = req.body;

        const filePath = path.join(__dirname, 'json', 'tempUsers.json');

        const newUser = {
            username,
            password,
            fullName,
            email,
            tel,
            students,
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
                    redirect: "/login",
                });
            } else {
                return res.status(409).json({
                    success: false,
                    message: result.message,
                    redirect: "/parent-register",
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: "An error occurred while processing the request.",
                redirect: "/",
            });
        }
    }
);

export default parentRegRouter;
