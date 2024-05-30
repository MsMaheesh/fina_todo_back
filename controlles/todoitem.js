const schma = require('../schma/Schma')
const Todoitems = async(req,res)=>{
    try{
        // console.log(req,"nnn")
        const person = await schma.findOne(req.userid._id)
        // console.log(person,"kkkkk")
        res.send(person._id)

    }
    catch(err){
        console.log(err)
    }
}
module.exports= Todoitems