const mediaModel=require("./media-model")

const createMedia=async(payload)=>{
    return await mediaModel.create(payload)
}

const getMediaById=async(id)=>{
    return await mediaModel.getById(id)
}

module.exports={
    createMedia,
    getMediaById
}