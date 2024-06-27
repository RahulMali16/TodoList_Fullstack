import express from "express"
import UserModels from "../models/user.js"
import bcrypt from "bcryptjs"




const router = express.Router();

//sign up or register
router.post("/register", async(req,res)=>{
    try {
        const {email,username,password} = req.body;
        const hashpassword = bcrypt.hashSync(password)
        const user = new UserModels({email,username,password:hashpassword}); 
        await user.save().then(()=>{
            res.status(200).json({user: user})
        })
        
    } catch (error) {
 
        res.status(400).json({message:"User Already Exists"})
        
    }
})


router.post("/login", async(req,res) =>{
    try {
        const user  = await UserModels.findOne({email: req.body.email})
        if(!user){
            res.status(400).json({message:"Please Sign Up First"}) 
        }
        const passwordisCorrect= bcrypt.compareSync(req.body.password,user.password)
        if(!passwordisCorrect){
            res.status(400).json({message:"Password Incorrect"}) 

        }
        const{ password,...others} = user._doc;
        res.status(200).json({others})

         
    } catch (error) {
        res.status(400).json({message:"User Already Exists"})
    }
})

 



export default router;
