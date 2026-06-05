import express from "express";
import multer from "multer";
import fs from "fs";
import pdfParse from "pdf-parse";
import xlsx from "xlsx";
import mammoth from "mammoth";
import csv from "csv-parser";
import cors from "cors";

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}
app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const filePath = req.file.path;
  const ext = req.file.originalname.split(".").pop().toLowerCase();

  try {
    let data;

    if (ext === "pdf") {
      const buffer = fs.readFileSync(filePath);
      const pdfData = await pdfParse(buffer);
      data = pdfData.text;

    } else if (ext === "xlsx") {
      const workbook = xlsx.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    } else if (ext === "json") {
      data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    } else if (ext === "docx") {
      const buffer = fs.readFileSync(filePath);
      const result = await mammoth.extractRawText({ buffer });
      data = result.value;

    } else if (ext === "csv") {
      data = await new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
          .pipe(csv())
          .on("data", (row) => results.push(row))
          .on("end", () => resolve(results))
          .on("error", (error) => reject(error));
      });

    } else {
      return res.status(400).json({ error: "Unsupported file type" });
    }

    res.json({ parsed: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
