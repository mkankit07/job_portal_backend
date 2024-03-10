const applyQuery = require("./apply-job-queries")
const response=require("../../commons/response")
const mediaService=require("../media/media-service")
const create=async(bodyData,userId,fileData)=>{
    const isExist=await applyQuery.findByUserIdAndJobId(userId,bodyData.job_id)
    if(isExist){
        return response(409,"already exists")
    }
    const media=await mediaService.createMedia(fileData)
    await applyQuery.create({...bodyData,media_id:media.data._id,user_id:userId})
    return response(200,"Job application submitted successfully !")
}

const findById=async(id)=>{
    const applyData=await applyQuery.findById(id)
    if(!applyData){
        return response(404,"data not found")
    }
    return response(200,"data found successfully",applyData)
}

const findByUserId=async(userId)=>{
    const applyData=await applyQuery.getAppliedJobByUserId(userId)
    return response(200,"data found successfully",applyData)
}

const findByJobId=async(jobId)=>{
    const applyData=await applyQuery.getAppliedJobByJobId(jobId)
    if(!applyData.length){
        return response(404,"data not found")
    }
    return response(200,"data found successfully",applyData)
}

const updateStatus=async(payload)=>{
    const applyData=await applyQuery.findById(payload.id)
    if(!applyData){
        return response(404,"Invalid request id")
    }
    await applyQuery.updateStatus(payload.id,{status:payload.status})
    return response(200,"status updated successfully")
}

module.exports={
    create,
    findById,
    findByUserId,
    findByJobId,
    updateStatus
}