const mediaQuery=require("./media-queries")
const response=require("../../commons/response")

const createMedia=async(data,user_id)=>{
    const payload={
        filename: data.filename,
        type: data?.mimetype.split('/')[0],
        local_path: data.path,
        tag: "media",
        mime_type: data.mimetype,
        size: data.size,
        created_by: user_id,
    }
    const media=await mediaQuery.createMedia(payload)
    return response(200,"media upload successful",media)
}

const findById=async(id)=>{
    const media=await mediaQuery.getMediaById(id)
    if(!media){
        return response(404,"data not found")
    }
    return response(200,"media found successfully",media)
}

module.exports={
    createMedia,
    findById
}