const mediaService=require("./media-service")

const createMedia=async(req,res)=>{
    const response=await mediaService.createMedia(req.file,res.local.id)
    res.status(response.code).json(response)
}

const findById=async(req,res)=>{
    const response=await mediaService.findById(req.params.id)
    res.status(response.code).json(response)
}

module.exports = {
    createMedia,
    findById
}