import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import hotelRoute from './routes/hotels.js'
import roomRoute from './routes/rooms.js'
import cookieParser from "cookie-parser";
dotenv.config()

const app=express()

const connect= async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error
  }
}

mongoose.connection.on("disconnected",()=>{
    console.log('database disconnected')
})

mongoose.connection.on("connected",()=>{
    console.log('database connected')
})

app.get('/',(req,res)=>{
  res.send('Hello world')
})

// middlware

app.use(cookieParser())
app.use(express.json())

app.use('/user',userRoute)
app.use('/auth',authRoute)
app.use('/hotel',hotelRoute)
app.use('/room',roomRoute)

app.listen('8800',()=>{
    connect()
    console.log('server start')
})