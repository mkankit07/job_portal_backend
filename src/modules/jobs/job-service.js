const jobQueries=require("./job-queries")
const response=require("../../commons/response")

const saveJob=async(data,user_id)=>{
    await jobQueries.saveJob({...data,user_id})
    return response(200,"Job posted successfully!")
}

const getJobById=async(id)=>{
    const job = await jobQueries.getJobById(id)
    if(!job){
        return response(404,"Invalid request id")
    }
    return response(200,"Job access successfully!",job)
}

const getJobByUser=async(user_id)=>{
    const job = await jobQueries.getJobByUserId(user_id)
    return response(200,"Job access successfully!",job)
}

const getAllJob=async()=>{
    const job = await jobQueries.getAllJob();
    return response(200,"Job access successfully!",job)

}


module.exports={
    saveJob,
    getJobById,
    getJobByUser,
    getAllJob
}