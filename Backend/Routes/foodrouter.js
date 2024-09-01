// import express from 'express';
// import multer from 'multer';
// import foodctrl from '../Controllers/foodctrl.js';

// const FoodRouter = express.Router();

// // Multer storage configuration
// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   }
// });

// const upload = multer({ storage });

// // Route to add a new food item
// FoodRouter.post('api/v1/food/add', upload.single("image"), foodctrl.addfood);

// export default FoodRouter;


import express from 'express';
import multer from 'multer';
import foodctrl from '../Controllers/foodctrl.js';

const FoodRouter = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

//*Route to add a new food item
FoodRouter.post('/api/v1/food/add', upload.single("image"), foodctrl.addfood);

//*Get All foods
FoodRouter.get('/api/v1/food/lists', foodctrl.getallfoods);

//*Remove fooditem
FoodRouter.post('/api/v1/food/removeitem', foodctrl.removeitem);


export default FoodRouter;

