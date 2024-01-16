import mongoose from "mongoose";


 const connectDB =async()=>{
    try {
        const {connection}= await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected to : ${connection.host}`)
    } catch (error) {
        console.log("Error in DB",error.message)
    }
}

export default connectDB;