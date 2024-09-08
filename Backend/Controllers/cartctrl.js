import userModel from "../Models/user.js";

const cartctrl={

  //*add tocart
  addtocart:async(req,res)=>{
      try {
        let userdata = await userModel.findById(req.body.userid);

        if (!userdata) {
          return res.status(404).json({ success: false, message: "User not found" });
        }
      
      let cartdata = userdata.cartdata || {};

      const { itemid } = req.body;

      
      if (!cartdata[itemid]) {
        cartdata[itemid] = 1;
      } else {
        cartdata[itemid] += 1;
      }
        await userModel.findByIdAndUpdate(req.body.userid,{cartdata})
        res.json({success:true,message:"Added to cart"})
      } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
      }
  },

  removefromcart:async(req,res)=>{
    try {
      let userdata=await userModel.findById(req.body.userid);
      let cartdata=await userdata.cartdata;


      if(cartdata[req.body.itemid]>0){
        cartdata[req.body.itemid]-=1;
      }
    
      await userModel.findByIdAndUpdate(req.body.userid,{cartdata})
      res.json({success:true,message:"item is removed from cart"})
    } catch (error) {
      console.log(error)
      res.json({success:false,message:"Error"})
    }
  },

    getallcart:async(req,res)=>{
      try {
        let userdata=await userModel.findById(req.body.userid);
        let cartdata=await userdata.cartdata;

        res.json({success:true,cartdata})
      } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
      }
    }



}

export default cartctrl;
