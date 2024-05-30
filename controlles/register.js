const sechma = require('../schma/Schma')
const Register = async(req,res)=>{
    const {name,email,password} =req.body
    try{
        const registeremail = await sechma.findOne({email})
        if(registeremail){
            return res.send("email alreddy register")
        }
        const da= new sechma({name,email,password})
        await da.save()
        res.send('register suceefully')
    
    }
    catch(err){
        console.log(err)
    }
}
module.exports=Register
