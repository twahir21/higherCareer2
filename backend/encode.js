import "dotenv/config";
import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.ENCODE_KEY;

if (!SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in .env file!");
}

// Encrypt ID
function encodeId(id) {
    return CryptoJS.AES.encrypt(id.toString(), SECRET_KEY).toString();
}

// Example Usage: Encoding ID 123
const encodedId = encodeId(123);
console.log("Encoded ID:", encodedId);
