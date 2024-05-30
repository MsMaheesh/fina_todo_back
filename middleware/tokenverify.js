const schma = require('../schma/Schma')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()
const key = process.env.key

const tokenverify = async(req,res,next)=>{
    // console.log("1111#",req)
    // console.log("1111",req.body.token)
    // const token = await req.headers.token  
    const token = await req.headers.token  
    // console.log("21111",token)

    if(!token){ 
        return res.send('token is not found') 
    } 
    try{
    const decode=jwt.verify(token,key)
    // console.log("3",decode)
    const user= await schma.findById(decode.id)
    // console.log("4",vender)
    if(!user){
       return res.send("vender not found")
    }
    req.userid=user._id
    // console.log(user.id,"%%%%")
    next() 
    }
    catch(err){
        res.send("invalid token")
    }
}
module.exports=tokenverify