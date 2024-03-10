const applyService=require("./apply-job-service")

const create=async(req,res)=>{
    const response=await applyService.create(req.body,res.local.id,req.file)
    res.status(response.code).json(response)
}

const getById=async(req,res)=>{
    const response=await applyService.findById(req.params.id)
    res.status(response.code).json(response)
}

const getByUserId=async(req,res)=>{
    const response=await applyService.findByUserId(res.local.id)
    res.status(response.code).json(response)
}

const getByJobId=async(req,res)=>{
    const response=await applyService.findByJobId(req.params.id)
    res.status(response.code).json(response)
}

const updatedStatus=async(req,res)=>{
    const response=await applyService.updateStatus(req.body)
    res.status(response.code).json(response)

}

module.exports={
    create,
    getById,
    getByUserId,
    getByJobId,
    updatedStatus
}