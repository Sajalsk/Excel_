import XLSX  from 'xlsx';
import User from '../Models/User' // Assuming you have a "User" model defined

const uploadUsersFromExcel = async (req, res) => {
  try {
    console.log("hey from server")
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'No files were uploaded.' });
    }

    const excelFile = req.files.excelFile;

    const workbook = XLSX.read(excelFile.data, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Insert the array of users into MongoDB
    await User.insertMany(jsonData);

    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'An error occurred while inserting data' });
  }
};

module.exports = { uploadUsersFromExcel };
