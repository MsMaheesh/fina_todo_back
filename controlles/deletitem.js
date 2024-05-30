const sechma = require('../schma/Schma')
const Itemdelet = async(req,res)=>{
    try{
        const id = req.params.id; // No need to use await here
        const itemToRemove = req.body.todo; // Assuming the item to delete is passed in the request body
        //  console.log(itemToRemove,"lll")
        //  console.log(req.body,"$$$")  
        // Find the document by ID 
        const person = await sechma.findById(id);

        if (!person) {
            return res.status(404).send({ error: 'Document not found' });
        }

        // Remove the item from the array
        person.item = person.item.filter(item => item !== itemToRemove);

        // Save the updated document
        await person.save();

        res.send(person);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'An error occurred while deleting the item' });
    }

        
    //     const id = await req.params.id
    //     const itemToRemove = req.body.todo;
    //     // console.log(id)
    //     const person = await sechma.findById(id)
    //     console.log(req.body.todo,"$$")

    //     // person.item.pop(req.body.todo)
    //     person.item = person.item.filter(item => item !== itemToRemove);
    //     await person.save()
    //     res.send(person ) 

    // }
    // catch(err){
    //     console.log(err)
    // }
}
module.exports= Itemdelet