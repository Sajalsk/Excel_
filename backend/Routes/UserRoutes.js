// routes/api.js
import express from 'express';
import XLSX  from 'xlsx';
import User from '../Models/User.js'
import formidable  from 'formidable';
import multer from 'multer';
// import UserRoutes from './Routes/UserRoutes.js'
const router = express.Router();

const upload = multer()





router.post('/uploadExcelFile', upload.single('excelFile'),async (req, res) => {
  try {
    console.log("hey from route")
    if (!req.file || Object.keys(req.file).length === 0) {
      console.log("Condition not verified", console.log(req.file),  Object.keys(req.file).length)

      return res.status(400).json({ message: 'No files were uploaded.' });
    }

    const excelFile = req.file;

    const workbook = XLSX.read(excelFile.buffer, { type: 'buffer' });
    console.log(workbook)
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Insert the array of users into MongoD
    await User.insertMany(jsonData);

    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'An error occurred while inserting data' });
  }
});

export default router
