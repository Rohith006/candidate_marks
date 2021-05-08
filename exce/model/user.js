const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    StudentId: {
        type:String, 
        unique:true
    },
    name: { 
        type: String, 
        required: true
    },
    email:{ 
        type: String,
        required : true,
        unique: true
    },
    first_round: Number,
    second_round: Number,
    third_round: Number
    
})

module.exports = mongoose.model('User', UserSchema)