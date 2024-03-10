const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    stutus: {
        type: Number,
        default: 1,
        enum: [1, 2, 3],
      }
},{timestamps: true})

module.exports=mongoose.model("users",userSchema)