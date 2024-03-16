const bookMarkQuery=require("./bookmark-queries")
const jobQuery=require("../jobs/job-queries")
const response=require("../../commons/response")

const create=async(data,user_id)=>{
    const job=await jobQuery.getJobById(data.job_id);
    if(!job){
        return response(400,"Invalid job Id!")
    }
    await bookMarkQuery.bookMarkJob({user_id,job_id:data.job_id})
   return response(201,"Job book marked successfully")
}

const getByUserId=async(user_id)=>{
    const bookmarked= await bookMarkQuery.getBookMarkByUserId(user_id)
    return response(200,"Job book marked successfully",bookmarked)
}

const deleteById=async(id)=>{
    const bookmarked= await bookMarkQuery.deleteBookMark(id)
    if(!bookmarked){
        return response(404,"Invalid job bookmarked id")
    }
    return response(200,"job removed successfully")
}

module.exports={
    create,
    getByUserId,
    deleteById
}