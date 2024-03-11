const mediaModel=require("./media-model")

const createMedia=async(payload)=>{
    return await mediaModel.create(payload)
}

const getMediaById=async(id)=>{
    return await mediaModel.findById(id)
}

module.exports={
    createMedia,
    getMediaById
}