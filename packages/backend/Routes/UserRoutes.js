import express from 'express';
import multer from 'multer';
import uploadExcelFile from '../Controllers/UserController.js'

const router = express.Router();
const upload = multer()

router.post('/uploadExcelFile',upload.single('excelFile'),uploadExcelFile);

export default router;