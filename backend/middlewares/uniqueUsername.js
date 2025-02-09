import database from "../config/db.js";

const checkUniqueUsername = async (username) => {
    try {
        const query = `
            SELECT username
            FROM (
                SELECT username FROM admin
                UNION
                SELECT username FROM teacher
                UNION
                SELECT username FROM parent
            ) AS all_users
            WHERE username = $1
        `;

        const result = await database.query(query, [username]);
        return result.rowCount === 0; // Returns true if the username is unique
    } catch (error) {
        console.error("Error checking unique username:", error);
        throw new Error("Database error while checking username uniqueness");
    }
};

export default checkUniqueUsername;