import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/db.js';
import cors from 'cors';

dotenv.config();

const app= express()

const PORT = process.env.PORT || 5000;

//database connection
connectDB()

//middlerwares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

//Routes
import userRoute from './routes/route.js'
app.use('/api',userRoute)

app.get('/',(req,res)=>{
    res.send("Welcome back")
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT} `)
})