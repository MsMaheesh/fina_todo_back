const sechma = require('../schma/Schma')
const dotenv = require('dotenv')
const jwt  = require('jsonwebtoken')

dotenv.config()

const key = process.env.key


const Login = async(req,res)=>{
    const {email,password} =req.body
    try{
        const loginemail = await sechma.findOne({email})
        const loginpassword = await sechma.findOne({password})
        if(!loginemail){
            return res.send("email invalid")
        }
        if(!loginpassword){
            return res.send("password invalid")
        }
        // console.log("login sucessfully")

        const payload={
            id:loginemail.id
        }
        const token =jwt.sign(payload,key,)
        //res.send("token generated")
        res.send(token)
    
    }
    catch(err){
        console.log(err)
    }
}
module.exports=Login
