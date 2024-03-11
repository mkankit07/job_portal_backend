const mediaService=require("./media-service")
var path = require('path');
const fs=require('fs');
const createMedia=async(req,res)=>{
    const response=await mediaService.createMedia(req.file,res.local.id)
    res.status(response.code).json(response)
}

const findById=async(req,res)=>{
    const response=await mediaService.findById(req.params.id)
    res.status(response.code).json(response)
}

const downloadCv=async(req,res)=>{
    const response=await mediaService.findById(req.params.id)
    if(response.code !==200){
        res.status(response.code).json(response)
    }
    var file =  `assets/uploads/${response?.data?.filename}`
    if(!fs.existsSync(file)){
        res.status(response.code).json({...response,message:"file not found"})
    }
    res.download(file,`${response.data?.filename}`,(err)=>{
            if(err){
                console.log(err)
                return
            }
    })
   
}

module.exports = {
    createMedia,
    findById,
    downloadCv
}