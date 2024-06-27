import express from "express";
import UserModels from "../models/user.js";
import ListModel from "../models/list.js";

const router = express.Router();


router.post("/addTask" , async(req,res)=>{
    const{title , body , email} = req.body;
    const existingUser = await UserModels.findOne({email});
    if(existingUser){
        const list = new ListModel({title ,body, user:existingUser});
        await list.save();
        existingUser.list.push()
    }
});

export default router;