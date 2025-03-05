import "dotenv/config";
import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.ENCODE_KEY;

// Decrypt ID
function decodeId(encryptedId) {
    const bytes = CryptoJS.AES.decrypt(encryptedId, SECRET_KEY);
    return parseInt(bytes.toString(CryptoJS.enc.Utf8), 10); // Convert back to integer
}

// Example Usage: Decoding an Encoded ID (Replace with actual encoded output)
const encodedId = "U2FsdGVkX19SpsMrwK66KDE7E5U/W1cVbSu7hX1IlYQ=";
const decodedId = decodeId(encodedId);
console.log("Decoded ID:", decodedId);
