const express = require('express');
const asyncHandler = require('../../utils/asyncHandler')
const mediaHandler=require("./media-handler")
const uploadMedia=require("../../middleware/multer")
const mediaRoutes=express.Router()
const authenticate=require("../../middleware/authentication")
mediaRoutes.post("/",authenticate,uploadMedia.storeOneMedia,asyncHandler(mediaHandler.createMedia))
mediaRoutes.get("/:id",authenticate,asyncHandler(mediaHandler.findById))
mediaRoutes.get("/download/:id",asyncHandler(mediaHandler.downloadCv))
module.exports=mediaRoutes