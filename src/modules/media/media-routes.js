const express = require('express');
const asyncHandler = require('../../utils/asyncHandler')
const mediaHandler=require("./media-handler")
const uploadMedia=require("../../middleware/multer")
const mediaRoutes=express.Router()
mediaRoutes.post("/",uploadMedia.storeOneMedia,asyncHandler(mediaHandler.createMedia))
mediaRoutes.get("/:id",asyncHandler(mediaHandler.findById))
module.exports=mediaRoutes