const bookMarkModel=require("./bookmark-model")

const bookMarkJob=async(payload)=>{
    return await bookMarkModel.create(payload)
}

const getBookMarkByUserId=async(user_id)=>{
    return await bookMarkModel.find({user_id}).populate('job_id').populate('user_id',"_id name")
}

const deleteBookMark=async(id)=>{
    return await bookMarkModel.findByIdAndDelete(id)
}

module.exports={
    bookMarkJob,
    getBookMarkByUserId,
    deleteBookMark
}