const joi = require("joi");

exports.postJob = joi.object({
  title: joi.string().required().min(3).messages({'string.base': 'title must be a string', 'any.required': "title is required",'string.min': 'title is invalid'}),
  description: joi.string().required().min(3).messages({'string.base': 'description must be a string', 'any.required': "description is required",'string.min': 'description is invalid'}),
  email : joi.string().required().email().trim().messages({ 'string.email': 'email must be a valid email', 'any.required': "email is required" ,'string.trim': 'Email may not contain any spaces at the beginning or end'}),
  company: joi.string().required().min(3).messages({'string.base': 'company must be a string', 'any.required': "company is required",'string.min': 'company is invalid'}),
  job_category: joi.string().required().messages({'string.base': 'job_category must be a string', 'any.required': "job_category is required"}),
  job_type: joi.string().required().messages({'string.base': 'job_type must be a string', 'any.required': "job_type is required"}),
  job_experience: joi.string().required().messages({'string.base': 'job_experience must be a string', 'any.required': "job_experience is required"}),
  job_vacancy: joi.number().required(),
  job_deadline: joi.date().required(),
  salary: joi.number().required(),
});

