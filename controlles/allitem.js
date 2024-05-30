const sechma = require('../schma/Schma')
const Itemall = async(req,res)=>{
    try{
        const id = await req.params.id
        if(!id){
            return res.send('id not found')
        } 
        // console.log(id) 
        const person = await sechma.findById(id)
        // console.log(person.item,"$$")
        // person.item.push(req.body.todo)
        // person.save()
        // res.json(person.item)   
        // 
        const items = person;   
        if(items){
            return res.json(items);
        }
        // else{
        //     return res.json("no todo")

        // }
     

    }
    catch(err){
        console.log(err)
    }
}
module.exports= Itemall