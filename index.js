const mongoose = require('mongoose')
const express = require('express')
const dotenv= require('dotenv')
const route = require('./routes/Routes')
const cors = require("cors")
const app = express()  
app.use(express.json())

dotenv.config()
app.use(cors())  

mongoose.connect(process.env.mon)
.then(()=>{
    console.log("mongoose connected")
})
.catch((err)=>{
    console.log("ffff")
})

app.use('/person',route) 
 

app.listen(3030,()=>{
    console.log("server running") 
})


