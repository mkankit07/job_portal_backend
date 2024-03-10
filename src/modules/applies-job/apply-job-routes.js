const express = require('express');
const asyncHandler = require('../../utils/asyncHandler')
const validateRequest=require("../../middleware/request-validation")
const applyJobHandler=require("./apply-job-handler")
const applyJobValidationSchema=require("./apply-job-validation-schema")
const uploadMedia=require("../../middleware/multer")

const applyJobRoutes=express.Router()
applyJobRoutes.post("/",uploadMedia.storeOneMedia,validateRequest.body(applyJobValidationSchema.applyJobSchema),asyncHandler(applyJobHandler.create))
applyJobRoutes.post("/job/:id",validateRequest.params(applyJobValidationSchema.idSchema),asyncHandler(applyJobHandler.getByJobId))
applyJobRoutes.get("/",asyncHandler(applyJobHandler.getByUserId))
applyJobRoutes.get("/:id",validateRequest.params(applyJobValidationSchema.idSchema),asyncHandler(applyJobHandler.getById))
applyJobRoutes.patch("/",[validateRequest.body(applyJobValidationSchema.updateStatus)],asyncHandler(applyJobHandler.updatedStatus))

module.exports = applyJobRoutes