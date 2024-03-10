const joi=require("joi")
 
exports.applyJobSchema=joi.object({
    job_id:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({'string.base': 'job_id must be a string', 'any.required': "job_id is required"}),
    name:joi.string().required().min(3).max(30).messages({'string.base': 'name must be a string', 'any.required': "name is required", 'string.max': 'name is invalid','string.min': 'name is invalid'}),
    email: joi.string().required().email().trim().messages({ 'string.email': 'email must be a valid email', 'any.required': "email is required" ,'string.trim': 'Email may not contain any spaces at the beginning or end'}),
    about:joi.string().min(3).max(30).messages({'string.base': 'about must be a string', 'any.required': "about is required", 'string.max': 'about is invalid','string.min': 'about is invalid'}),
})

exports.updateStatus=joi.object({
    status:joi.string().valid("accepted", "rejected"),
    id:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({'string.base': 'id must be a string', 'any.required': "id is required"}),
})

exports.idSchema=joi.object({
    id:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({'string.base': 'id must be a string', 'any.required': "id is required"}),
})