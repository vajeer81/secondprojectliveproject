const mongoose = require('mongoose')

const studentschema = new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:String,
    address:String
})



module.exports = mongoose.model('student',studentschema)