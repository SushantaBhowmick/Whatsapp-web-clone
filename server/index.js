import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/db.js';
import cors from 'cors';
import morgan from 'morgan'

dotenv.config();

const app= express()

const PORT = process.env.PORT || 5000;

//database connection
connectDB()

//middlerwares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(morgan('dev'))


app.get('/test',(req,res)=>{
    res.send('Welcome to Whatsapp Clone')
})
//Routes
import userRoute from './routes/route.js'
app.use('/api',userRoute)

app.get('/test',(req,res)=>{
    res.send("Welcome to Whatsapp Web")
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT} `)
})