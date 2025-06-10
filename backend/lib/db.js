import mongoose from "mongoose";

export const connectDB=async()=>{
  try{
    const conn=await mongoose.connect("mongodb+srv://aftabskh7777:2K3hTyFaPgqiP0nr@cluster0.vlmjl0i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    console.log(`MongoDB connected :${conn.connection.host}`);
  }catch(error){
console.log("Error connecting to MONGODB",error.message);
process.exit();
  }
}