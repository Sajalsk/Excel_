// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoutes from './Routes/UserRoutes.js'
import bodyParser from 'body-parser';

// import fileUpload from './Middleware/fileUploadMiddleware.cjs';
// import multer from 'multer';
// const upload = multer()

const app = express();
const PORT =  8000;
const MONGODB_URI = 'mongodb://localhost:27017';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Add CORS middleware to allow cross-origin requests
app.use(express.json());

// MongoDB connection
mongoose
  .connect(MONGODB_URI, {
  
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', UserRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
