const mongoose = require('mongoose')
const schma = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}, 
    item:[{type:String}]
})

module.exports = mongoose.model('register',schma)