const mongoose = require('mongoose')

const bookmarkSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    job_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"jobs"
    }
})

module.exports=mongoose.model("book_mark_job",bookmarkSchema)