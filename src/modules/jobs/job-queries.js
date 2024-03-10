const jobModel=require("./job-model")

const saveJob=async(payload)=>{
    return await jobModel.create(payload)
}

const getJobById=async(id)=>{
    return await jobModel.findById(id).populate("user_id", '_id name email')
}

const getJobByUserId=async(userId)=>{
    return await jobModel.find({user_id:userId}).populate({
        path:"user_id",
        select:"_id name email"
    });
}

const getAllJob=async()=>{
    return await jobModel.find().populate("user_id", '_id name email')
}

module.exports={
    saveJob,
    getJobById,
    getJobByUserId,
    getAllJob
}