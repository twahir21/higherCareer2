import path from "path";
import fs from "fs";
import database from "../config/db.js";
import { fileURLToPath } from "url";

// Path to the JSON file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../routes/json", "tempUsers.json");

// Utility function to read JSON data
function readUsersFromFile() {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
}

// Utility function to write JSON data
function writeUsersToFile(users) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(users, null, 2), "utf8", (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

// 🚀 Fetch All Users and Categorize Them
export const fetchAllUsers = async (req, res) => {
    try {
        const users = await readUsersFromFile();

        // Categorizing users for easier admin review
        const parents = users.filter(user => user.students);
        const teachers = users.filter(user => user.qualifications);

        res.json({ success: true, parents, teachers });
    } catch (error) {
        console.error("Error reading file:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// 🚀 Approve User and Assign Role
export const updateUserRole = async (req, res) => {
    const { username } = req.params;
    const { role } = req.body; 

    try {
        const users = await readUsersFromFile();
        const user = users.find(user => user.username === username);

        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        if (!role || !["parent", "teacher"].includes(role)) {
            return res.status(400).json({ success: false, message: "Invalid role provided." });
        }

        user.isApproved = true;
        user.role = role;

        if (role === "parent") {
            await insertIntoParentDB(user);
        } else if (role === "teacher") {
            await insertIntoTeacherDB(user);
        }

        const updatedUsers = users.filter(u => u.username !== username);
        await writeUsersToFile(updatedUsers);

        res.json({ success: true, message: `User approved as ${role}` });

    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// 🚀 Insert Parent into Database
async function insertIntoParentDB(user) {
    const checkQuery = `SELECT COUNT(*) FROM parent WHERE username = $1 OR email = $2`;
    const checkValues = [user.username, user.email];

    try {
        const result = await database.query(checkQuery, checkValues);
        const userExists = parseInt(result.rows[0].count, 10) > 0;

        if (userExists) throw new Error("User with the same username or email already exists");

        const insertParentQuery = `
            INSERT INTO parent (username, password, fullName, email, tel, isApproved, isVerified, createdAt)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id
        `;
        const insertParentValues = [
            user.username, user.password, user.fullName, user.email, user.tel,
            user.isApproved, user.isVerified, user.createdAt
        ];
        const parentResult = await database.query(insertParentQuery, insertParentValues);
        const parentId = parentResult.rows[0].id;

        for (const student of user.students) {
            const insertStudentQuery = `
                INSERT INTO students (parent_id, fullName, className, relationship)
                VALUES ($1, $2, $3, $4)
            `;
            await database.query(insertStudentQuery, [parentId, student.fullName, student.className, student.relationship]);
        }

    } catch (error) {
        console.error("Error inserting into parent DB:", error);
        throw error;
    }
}

// 🚀 Insert Teacher into Database
async function insertIntoTeacherDB(user) {
    const checkQuery = `SELECT COUNT(*) FROM teacher WHERE username = $1 OR email = $2`;
    const checkValues = [user.username, user.email];

    try {
        const result = await database.query(checkQuery, checkValues);
        const userExists = parseInt(result.rows[0].count, 10) > 0;

        if (userExists) throw new Error("User with the same username or email already exists");

        const insertTeacherQuery = `
            INSERT INTO teacher (username, password, fullName, email, tel, qualifications, subjectTaught, isApproved, isVerified, createdAt)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        `;
        const insertTeacherValues = [
            user.username, user.password, user.fullName, user.email, user.tel,
            user.qualifications, user.subjectTaught, user.isApproved, user.isVerified, user.createdAt
        ];

        await database.query(insertTeacherQuery, insertTeacherValues);
    } catch (error) {
        console.error("Error inserting into teacher DB:", error);
        throw error;
    }
}

// 🚀 Delete User from JSON (Reject User)
export const deleteUser = async (req, res) => {
    const { username } = req.params;

    try {
        const users = await readUsersFromFile();
        const userIndex = users.findIndex(user => user.username === username);

        if (userIndex === -1) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        users.splice(userIndex, 1);
        await writeUsersToFile(users);

        res.json({ success: true, message: "User rejected successfully." });
    } catch (error) {
        console.error("Error rejecting user:", error);
        res.status(500).json({ success: false, message: "An error occurred while rejecting the user." });
    }
};
