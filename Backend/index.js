import express from 'express';
import cors from 'cors';
import { connectDB } from './DBConfig/dbconfig.js';
import FoodRouter from './Routes/foodrouter.js';

const app = express();
const port = 8080;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', FoodRouter); 
app.use('/images',express.static('uploads'))

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
