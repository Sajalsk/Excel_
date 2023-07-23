import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoutes from './Routes/UserRoutes.js'
import bodyParser from 'body-parser';

const app = express();
const PORT =  8000;
const MONGODB_URI = 'mongodb://localhost:27017';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 
app.use(express.json());


mongoose
  .connect(MONGODB_URI, {
  
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api', UserRoutes);


app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
