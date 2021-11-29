const Joi = require('joi')

const schema = Joi.object({
  id: Joi.string().required(),
  timestamp: Joi.date().timestamp().required(),
  type: Joi.string().valid('voice', 'document', 'image', 'text').required(),
  from: Joi.string().required(),

  bot: Joi.object({
    id: Joi.string().required(),
    phone: Joi.string().required(),
  }).required(),

  voice: Joi.object({
    url: Joi.string().required(),
    mimeType: Joi.string().required(),
  }).when('type', { is: 'voice', then: Joi.required() }),

  document: Joi.object({
    url: Joi.string().required(),
    mimeType: Joi.string().required(),
    caption: Joi.string(),
  }).when('type', { is: 'document', then: Joi.required() }),

  image: Joi.object({
    url: Joi.string().uri().required(),
    mimeType: Joi.string().required(),
    caption: Joi.string(),
  }).when('type', { is: 'image', then: Joi.required() }),

  text: Joi.object({
    body: Joi.string().required(),
  }).when('type', { is: 'text', then: Joi.required() }),
}).options({ abortEarly: false, stripUnknown: true })

module.exports = schema
