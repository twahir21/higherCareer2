import express from "express";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const routerForm = express.Router();
routerForm.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const downloadsDir = join(__dirname, "../downloads");
if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir, { recursive: true });
}

routerForm.post("/generate-pdf", async (req, res) => {
    try {
        const formData = req.body.formData;
        const formID = uuidv4();

        const htmlContent = `
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: 'Ubuntu', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        margin: 0;
                        padding: 10px;
                        color: #2c3e50;
                        line-height: 1.6;
                    }
                    .container {
                        padding: 20px;
                        margin: 10px auto;
                        max-width: 800px;
                        border-radius: 8px;
                        position: relative;
                    }
                    .header {
                        text-align: right;
                        font-size: 14px;
                        color: #27ae60;
                        padding-bottom: 10px;
                        border-bottom: 2px solid #ecf0f1;
                        margin-bottom: 20px;
                    }
                    h1 {
                        color: #2c3e50;
                        font-size: 21px;
                        margin: 10px 0;
                        text-transform: uppercase;
                        letter-spacing: 1.5px;
                        text-align: center;
                        border-bottom: 2px solid #3498db;
                        padding-bottom: 15px;
                    }
                    h2 {
                        color: #3498db;
                        font-size: 20px;
                        margin: 20px 0 15px;
                        padding-bottom: 10px;
                        border-bottom: 1px solid #ecf0f1;
                    }
                    p {
                        margin: 12px 0;
                        font-size: 15px;
                        padding-left: 15px;
                    }
                    strong {
                        color: #2c3e50;
                        min-width: 220px;
                        display: inline-block;
                    }
                    .signature-container {
                        margin: 10px 0;
                        padding: 10px;
                        background: #f8f9fa;
                        border-radius: 6px;
                        border: 1px solid #ecf0f1;
                    }
                    .signature-container img {
                        width: 200px;
                        height: 80px;
                        margin-top: 10px;
                        border: 1px solid #bdc3c7;
                        background: white;
                        padding: 5px;
                        border-radius: 4px;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 10px;
                        padding-top: 5px;
                        border-top: 2px solid #ecf0f1;
                        color: #7f8c8d;
                        font-size: 11px;
                        line-height: 1.1;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">Form ID: ${formID}</div>
                    <h1>Joining Form</h1>
                    <p><strong>Student Name:</strong> ${formData.student_name}</p>
                    <p><strong>Date of Birth:</strong> ${formData.birth_date}</p>
                    <p><strong>Gender:</strong> ${formData.gender}</p>
                    <p><strong>School Name:</strong> ${formData.school_name}</p>
                    <p><strong>Year of Joining School:</strong> ${formData.join_year}</p>
                    <p><strong>Class:</strong> ${formData.class}</p>

                    <h2>Parent/Guardian Information</h2>
                    <p><strong>Parent/Guardian Name:</strong> ${formData.parent_name}</p>
                    <p><strong>Parent's Address:</strong> ${formData.home}</p>
                    <p><strong>House Number:</strong> ${formData.house_no}</p>
                    <p><strong>Parent's Phone Number:</strong> ${formData.phone}</p>
                    <p><strong>Additional Parent Contact (Optional):</strong> ${formData.phone_optional}</p>
                    <p><strong>Form Submission Date:</strong> ${formData.date}</p>
                    <p><strong>Form Submission Date (for record):</strong> ${formData.date_submitted}</p>

                    <h2>Parent's Commitment</h2>
                    <p><strong>Parent's Commitment Statement:</strong> ${formData.explanations}</p>

                    <div class="signature-container">
                        <p><strong>Parent's Signature:</strong></p>
                        <img src="${formData.signature}" alt="Parent's Signature">
                    </div>

                    <div class="footer">
                        <p>NB: All payments should be made to Islamic Bank PBZ ACCOUNT NO: 0726551001</p>
                        <p>Account Name: AB Higher Career Academic Ltd</p>
                    </div>
                </div>
            </body>
        </html>`;

        const browser = await puppeteer.launch({
            headless: "new",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const page = await browser.newPage();
        await page.setContent(htmlContent);

        const pdfPath = join(downloadsDir, `${formID}.pdf`);

        await page.pdf({
            path: pdfPath,
            format: "A4",
            printBackground: true,
        });

        await browser.close();

        res.json({
            success: true,
            pdfPath: `/downloads/${formID}.pdf`,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

export default routerForm;
