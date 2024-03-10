const express = require('express');
const asyncHandler = require('../../utils/asyncHandler')
const validateRequest=require("../../middleware/request-validation")
const jobHandler=require("./job-handler")
const jobValidationSchema=require("./job-validation-schema")

const jobRoutes=express.Router()

jobRoutes.post("/",validateRequest.body(jobValidationSchema.postJob),asyncHandler(jobHandler.postJob))
jobRoutes.get("/user-job",asyncHandler(jobHandler.postJobByUser))
jobRoutes.get("/",asyncHandler(jobHandler.getAllJob))
jobRoutes.get("/:id",asyncHandler(jobHandler.findJobById))

module.exports=jobRoutes