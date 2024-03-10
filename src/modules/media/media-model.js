const mongoose = require('mongoose');
const mediaSchema=new mongoose.Schema({
    filename:{
        type:String
    },
    type:{
        type:String
    },
    local_path:{
        type:String
    },
    mime_type:{
        type:String
    },
    tag:{
        type:String
    },
    size:{
        type:Number
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
  
},{timestamps: true})

module.exports=mongoose.model("medias",mediaSchema)