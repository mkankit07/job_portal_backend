const Joi = require("joi");
const joi = require("joi");

exports.jobId=joi.object({
    job_id:joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({'string.base': 'job_id must be a string', 'any.required': "job_id is required"})
})