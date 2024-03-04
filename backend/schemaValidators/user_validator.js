const Joi = require("joi");

const userRegistrationSchema = Joi.object({
    name: Joi.string().min(4).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    confirmPassword: Joi.ref('password'),
})

const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

module.exports = {userRegistrationSchema, userLoginSchema};