import fs from "fs";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

// Function to hash the password
async function hashPassword(password) {
    try {
        const salt =  await bcrypt.genSalt(process.env.SALT); // Generate a salt
        const hashedPassword = await bcrypt.hash(password, salt); // Hash the password
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

// Function to save data to a JSON file
async function saveToJSONFile(data, filePath) {
    try {
        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            // Create an empty file if it doesn't exist
            fs.writeFileSync(filePath, JSON.stringify([], null, 2));
        }

        // Read the existing data
        const fileData = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(fileData);

        // Check if the username, email, or other unique fields already exist
        const isDuplicate = jsonData.some(
            user =>
                user.username === data.username ||
                user.email === data.email ||
                user.fullName === data.fullName ||
                user.tel === data.tel 
        );

        if (isDuplicate) {
            return { success: false, message: 'User already exists.' };
        }

        // Hash the user's password
        data.password = await hashPassword(data.password);

        // Add the new data to the existing data
        jsonData.push(data);

        // Write the updated data back to the file
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

        console.log('Data saved successfully!');
        return { success: true, message: 'User registered successfully. Please wait for the admin to verify your account' };
    } catch (error) {
        console.error('Error saving data:', error);
        throw new Error('Error saving data');
    }
}

// Export the functions

export default {
    hashPassword,
    saveToJSONFile
}