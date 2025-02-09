import path from "path";
import fs from "fs";
import database from "../config/db.js";
import { fileURLToPath } from "url";


// Path to the user JSON file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'json', 'tempUsers.json');


// Utility function to read JSON data
function readUsersFromFile() {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
}

// Utility function to write JSON data
function writeUsersToFile(users) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8', (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

// implement CRUD and assign roles to users

// fetch all users
export const fetchAllUsers = async (req, res) => {
    try {
        const users = await readUsersFromFile();
        res.json(users);
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

// update user approval and assign role
export const updateUserRole = async (req, res) => {
    const { username } = req.params;
    const { role } = req.body; // Role comes from the admin's selection

    try {
        const users = await readUsersFromFile();
        const user = users.find(user => user.username === username);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (!role || !['parent', 'teacher'].includes(role)) {
            return res.status(400).json({ success: false, message: 'Invalid role provided.' });
        }

        // Approve the user and assign the role
        user.isApproved = true;
        user.role = role;

        // Insert user into the respective database table
        if (user.role === 'parent') {
            await insertIntoParentDB(user);
        } else if (user.role === 'teacher') {
            await insertIntoTeacherDB(user);
        }

        // After successful insert, delete the user from the JSON file
        const updatedUsers = users.filter(u => u.username !== username);
        await writeUsersToFile(updatedUsers);

        res.json({
            success: true,
            message: `User approved and assigned the role of ${user.role}.`
        });

    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}


// Helper function to insert user into the parent table
async function insertIntoParentDB(user) {
    // Query to check if the username or email already exists
    const checkQuery = `
        SELECT COUNT(*) FROM parent 
        WHERE username = $1 OR student_fullName = $2
    `;
    const checkValues = [user.username, user.student_fullName];

    try {
        // Check if user exists
        const result = await database.query(checkQuery, checkValues);
        const userExists = parseInt(result.rows[0].count, 10) > 0;

        if (userExists) {
            throw new Error('User with the same username or email already exists');
        }

        // Proceed to insert the user if no conflicts
        const insertQuery = `
            INSERT INTO parent (username, password, fullName, email, tel, relationship, student_fullName, student_class, role, isApproved, isVerified, createdAt)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        `;
        const insertValues = [
            user.username, user.password, user.fullName, user.email, user.tel, user.relationship,
            user.student_fullName, user.student_class, 'parent',
            user.isApproved, user.isVerified, user.createdAt
        ];
        await database.query(insertQuery, insertValues);
    } catch (error) {
        console.error('Error inserting into parent DB:', error);
        throw error; // Re-throw the error for higher-level handling
    }
}

// deleting user by username
export const deleteUser = async (req, res) => {
    const { username } = req.params;

    try {
        const users = await readUsersFromFile();
        const userIndex = users.findIndex(user => user.username === username);

        if (userIndex === -1) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Remove the user from the array
        users.splice(userIndex, 1);
        await writeUsersToFile(users);

        res.json({ success: true, message: 'User rejected successfully.' });
    } catch (error) {
        console.error('Error rejecting a user:', error);
        res.status(500).json({ success: false, message: 'An error occurred while rejecting the user.' });
    }
}


// Helper function to insert user into the teacher table
async function insertIntoTeacherDB(user) {
    // Query to check if the username or email already exists
    const checkQuery = `
    SELECT COUNT(*) FROM teacher
    WHERE username = $1 OR email = $2
    `;
    const checkValues = [user.username, user.student_fullName];

    try {
        // Check if user exists
        const result = await database.query(checkQuery, checkValues);
        const userExists = parseInt(result.rows[0].count, 10) > 0;

        // proceed
        const query = `
        INSERT INTO teacher (username, password, fullName, email, tel, qualifications, subjectTaught, role, isApproved, isVerified, createdAt)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        `;
        const values = [
            user.username, user.password, user.fullName, user.email, user.tel, user.qualifications,
            user.subjectTaught, 'teacher', // Role is 'teacher' here
            user.isApproved, user.isVerified, user.createdAt
        ];

        if (userExists) {
            throw new Error('User with the same username or email already exists');
        }
        await database.query(query, values);
    } catch (error) {
        console.error('Error inserting into teacher DB:', error);
        throw new Error('Error saving to teacher database');
    }
}