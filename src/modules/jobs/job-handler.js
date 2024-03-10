const jobService=require("./job-service")

const postJob=async(req,res)=>{
    const response=await jobService.saveJob(req.body,res.local.id)
    res.status(response.code).json(response)
}

const findJobById=async(req,res)=>{
    const response=await jobService.getJobById(req.params.id)
    res.status(response.code).json(response)
}

const postJobByUser=async(req,res)=>{
    const response=await jobService.getJobByUser(res.local.id)
    res.status(response.code).json(response)
}
const getAllJob=async(req,res)=>{
    const response=await jobService.getAllJob()
    res.status(response.code).json(response)
}

module.exports={
    postJob,
    findJobById,
    postJobByUser,
    getAllJob
}