const sechma = require('../schma/Schma')
const Item = async(req,res)=>{
    try{
        const id = await req.params.id
        // console.log(id)
        const person = await sechma.findById(id)
        console.log(req.body.todo,"$$")
        person.item.push(req.body.todo)
        person.save()
        res.send(person)

    }
    catch(err){
        console.log(err)
    }
}
module.exports= Item