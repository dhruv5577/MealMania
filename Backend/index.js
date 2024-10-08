import express from 'express';
import cors from 'cors';
import { connectDB } from './DBConfig/dbconfig.js';
import FoodRouter from './Routes/foodrouter.js';
import 'dotenv/config.js'
import UserRouter from './Routes/userrouter.js';
import CartRouter from './Routes/cartrouter.js';
import isAuth from './Middlewares/Auth.js';

const app = express();
const port = 8080;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', isAuth,FoodRouter); 
app.use('/images',express.static('uploads'))
app.use('/',UserRouter);
app.use('/',isAuth,CartRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
