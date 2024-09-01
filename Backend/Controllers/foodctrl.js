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
  },

  removeitem:async(req,res)=>{
    try {
      
      const food = await foodModel.findById(req.body.id);

      if (!food) {
        return res.status(404).json({ success: false, message: "Food item not found" });
      }

      
      fs.unlink(`uploads/${food.image}`, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ success: false, message: "Failed to delete image file" });
        }
      });

      
      await foodModel.findByIdAndDelete(req.body.id);
      res.json({ success: true, message: "Item has been removed successfully" });
    } catch (error) { 
        console.log(error);
        res.json({success:false,message:"error has been occured"})
    }
  }


};

export default foodctrl;
