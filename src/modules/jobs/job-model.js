const mongoose= require("mongoose");

const jobSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    job_category:{
        type:String,
        required:true
    },
    job_type:{
        type:String,
        required:true
    },
    job_experience:{
        type:String,
        required:true
    },
    job_vacancy:{
        type:String,
    },
    job_deadline:{
        type:Date,
        required:true
    },
    stutus: {
        type: Number,
        default: 1,
        enum: [1, 2, 3],
      }
},
{timestamps: true})

module.exports = mongoose.model("jobs",jobSchema)