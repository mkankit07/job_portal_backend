const express = require('express');
const asyncHandler = require('../../utils/asyncHandler')
const validateRequest=require("../../middleware/request-validation")
const userHandler=require("./user-handler")
const userRoutes=express.Router()
const userValidationSchema=require("./user-validation-schema")

userRoutes.post("/register",validateRequest.body(userValidationSchema.registerSchema),asyncHandler(userHandler.register))
userRoutes.post("/login",validateRequest.body(userValidationSchema.loginSchema),asyncHandler(userHandler.login))
userRoutes.patch("/forget/password",validateRequest.body(userValidationSchema.forgetPasswordSchema), asyncHandler(userHandler.forgetPassword))

module.exports = userRoutes