import mongoose from "mongoose";

export const connectDB=async()=>{
  await mongoose.connect('mongodb+srv://MealMania2003:MealMania55772024@cluster0.s3cg9.mongodb.net/MealMania').then(()=>console.log("DB Connceted"))
}