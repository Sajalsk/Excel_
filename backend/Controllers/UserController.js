import XLSX  from 'xlsx';
import User from '../Models/User.js'

const uploadExcelFile = async (req, res) => {
  try {
    console.log("hey from route")
    // console.log(db.collection , "hey from route")
    if (!req.file || Object.keys(req.file).length == 0 ) {
      console.log("Condition not verified", console.log(req.file), Object.keys(req.file).length)
      return res.status(400).json({ message: 'No files were uploaded.' });
    }

    const excelFile = req.file;

    const workbook = XLSX.read(excelFile.buffer, { type: 'buffer' });
    //console.log(workbook)
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Insert the array of users into MongoD
    await User.insertMany(jsonData);
    console.log(jsonData);

    res.status(201).json({ message: 'Data inserted successfully' });
  } catch (error) {
    console.error('Error inserting data:', error);
   
    res.status(500).json({ error: 'An error occurred while inserting data' });
  }
  
};

export default uploadExcelFile;
