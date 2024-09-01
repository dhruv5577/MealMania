import express from 'express';
import multer from 'multer';
import foodctrl from '../Controllers/foodctrl.js';
import path from 'path';

const FoodRouter = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Route to add a new food item
FoodRouter.post('/api/v1/food/add', upload.single("image"), foodctrl.addfood);

// Get all foods
FoodRouter.get('/api/v1/food/lists', foodctrl.getallfoods);

// Remove food item
FoodRouter.post('/api/v1/food/removeitem', foodctrl.removeitem);

export default FoodRouter;
