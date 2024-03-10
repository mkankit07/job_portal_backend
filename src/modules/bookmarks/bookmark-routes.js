const express = require('express');
const asyncHandler = require('../../utils/asyncHandler')
const validateRequest=require("../../middleware/request-validation")
const bookMarkHandler=require("./bookmark-handler")
const bookMarkValidationSchema=require("./bookmark-validation-schema")

const bookMarkRoutes=express.Router()

bookMarkRoutes.post("/", validateRequest.body(bookMarkValidationSchema.jobId),asyncHandler(bookMarkHandler.create))
bookMarkRoutes.get("/",asyncHandler(bookMarkHandler.getBookMarkByUserId)) 
bookMarkRoutes.delete(":/id", asyncHandler(bookMarkHandler.deleteById))

module.exports = bookMarkRoutes