const Joi = require('joi')

const schema = Joi.object({
  phoneNumber: Joi.string().required(),

  bot: Joi.object({
    id: Joi.string().required(),
  }).required(),
}).options({ abortEarly: false, stripUnknown: true })

module.exports = schema
