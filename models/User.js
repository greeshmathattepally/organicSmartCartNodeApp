const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {type:String,required: true},
    email: {type: String, required: true},
    address:{type: String, required: true},
    phone: {type: String,required: true},
    password: {type: String, required: true},
    date:{type:Date, default: Date.now},
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    city: {type:String, required:true},
    country: {type:String, required:true}
})

module.exports = mongoose.model('User',userSchema)