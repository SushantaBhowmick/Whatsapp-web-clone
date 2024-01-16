import User from "../models/userModel.js"


export const addUser=async(req,res)=>{
    try {
        const user = await User.findOne({sub:req.body.sub});
        if(user){
            return res.status(200).json({
                success:true,
                msg:"User already exists"
            })
        }

       const newUser= new User(req.body)
       await newUser.save();
       res.status(201).json({
        success:true,
        msg:"User added successfully!",
        newUser

    }) 

    } catch (error) {
        res.status(500).json({
            success:false,
            msg:"Internal Server Error"
        })
    }
}


export const getUser=async(req,res)=>{
    try {
        const users = await User.find({});
        res.status(201).json({
            success:true,
            users
    }) 

    } catch (error) {
        res.status(500).json({
            success:false,
            msg:"Internal Server Error"
        })
    }
}