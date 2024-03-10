const joi=require("joi");

const name = joi.string().required().min(3).max(30).messages({'string.base': 'name must be a string', 'any.required': "name is required", 'string.max': 'name is invalid','string.min': 'name is invalid'});
const email = joi.string().required().email().trim().messages({ 'string.email': 'email must be a valid email', 'any.required': "email is required" ,'string.trim': 'Email may not contain any spaces at the beginning or end'});
const password = joi.string().required().min(6).max(16).messages({'string.base': 'password must be a string', 'any.required': "password is required", 'string.max': 'password is invalid','string.min': 'password is invalid'});

exports.registerSchema=joi.object({
    email,
    name,
    password
})

exports.loginSchema=joi.object({
    email,
    password    
})

exports.forgetPasswordSchema=joi.object({
    email,
    password 
})