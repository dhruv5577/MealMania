import foodModel from "../Models/food.js";
import fs from 'fs'

const foodctrl = {
  //* Add Food Item
  addfood: async (req, res) => {
    let image_file = `${req.file.filename}`;

    const newfood = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_file
    });

    try {
      await newfood.save();
      res.json({ success: true, message: "Food has been added" });
      
    } catch (error) {
      //console.error(error);
      res.status(500).json({ success: false, message: "An error has occurred" });
    }
  },

  getallfoods:async(req,res)=>{
    try {
      const foods=await foodModel.find({});
      res.json({success:true,data:foods})
    } catch (error) { 
        console.log(error);
        res.json({success:false,message:"error has been occured"})
    }
  }


};

export default foodctrl;
