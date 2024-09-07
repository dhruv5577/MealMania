import userModel from "../Models/user.js";
import JWT from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

const userctrl={

  //register user
  register:async(req,res)=>{
      const {name,password,email}=req.body;
      try {
        const userexists=await userModel.findOne({email});
        if(userexists){
          return res.json({success:false,message:"User is already exists"})
        }

        //*validating email
        if(!validator.isEmail(email)){
          return res.json({success:false,message:"Enter a valid email"})
        }

        if(password.length<8){
          return res.json({success:false,message:"Enter a strong password"})
        }

        const salt=await bcrypt.genSalt(8);
        const userpassword=await bcrypt.hash(password,salt);

        const newuser=new userModel({
          name,
          password:userpassword,
          email
        })

        const user=await newuser.save();

        const token=JWT.sign({_id:user._id},process.env.JWT_SECRET_KEY)
        res.json({success:true,token})

      } catch (error) {
          res.json({success:false,message:"Error in the registration"})
      }
  },

  //Login user
//   login:async(req,res)=>{

//   }
}

export default userctrl;