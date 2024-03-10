const bookMarkService=require("./bookmark-service")

const create=async(req,res)=>{
    const response=await bookMarkService.create(req.body,res.local.id)
    res.status(response.code).json(response)
}

const getBookMarkByUserId=async(req,res)=>{
    const response=await bookMarkService.getByUserId(res.local.id)
    res.status(response.code).json(response)
}

const deleteById=async(req,res)=>{
    const response=await bookMarkService.deleteById(req.params.id)
    res.status(response.code).json(response)
}

module.exports={
    create,
    getBookMarkByUserId,
    deleteById
}