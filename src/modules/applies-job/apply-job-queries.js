const applyJobModel=require("./apply-job-model")

const create=async(payload)=>{
    return await applyJobModel.create(payload)
}

const getAppliedJobByJobId=async(id)=>{
    return await applyJobModel.find({job_id:id}).populate("user_id","_id name").populate("media_id","_id filename")
}

const getAppliedJobByUserId=async(user_id)=>{
    return await applyJobModel.find({user_id}).populate("user_id","_id name").populate("job_id")
}

const findById=async(id)=>{
    return await applyJobModel.findById(id).populate('job_id').populate("user_id","_id name")
}

const updateStatus=async(id,payload)=>{
    return await applyJobModel.findByIdAndUpdate(id, payload, { new: true })
}

const findByUserIdAndJobId=async(user_id,job_id)=>{
    return await applyJobModel.findOne({user_id,job_id})
}

module.exports={
    create,
    getAppliedJobByJobId,
    getAppliedJobByUserId,
    findById,
    updateStatus,
    findByUserIdAndJobId
}