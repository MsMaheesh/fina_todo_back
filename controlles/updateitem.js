const schema = require('../schma/Schma');

const ItemUpdate = async (req, res) => {
    try {
        const id = req.params.id; // Get ID from URL params
        const { oldTodo, newTodo } = req.body; // Get old and new item from request body

        // Find the document by ID
        const person = await schema.findById(id);

        if (!person) {
            return res.status(404).send({ error: 'Document not found' });
        }

        // Find the index of the item to be updated
        const itemIndex = person.item.indexOf(oldTodo);
        if (itemIndex === -1) {
            return res.status(404).send({ error: 'Item not found in the array' });
        }

        // Update the item
        person.item[itemIndex] = newTodo;

        // Save the updated document
        await person.save();

        res.send(person);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'An error occurred while updating the item' });
    }
};

module.exports = ItemUpdate;