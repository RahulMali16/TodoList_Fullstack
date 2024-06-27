import mongoose from "mongoose";


const conn =  async (req,res)=>{
 try {
      await mongoose.connect("mongodb+srv://rahulmali1603:Rahulmali_22@todolistapp.brgohbe.mongodb.net/?retryWrites=true&w=majority&appName=todolistapp").then(()=>{
        console.log("mdb connected");
      })
 } catch (error) {
    res.status(400).json({
        message:"Not Connected"
    })
 }
}

conn();