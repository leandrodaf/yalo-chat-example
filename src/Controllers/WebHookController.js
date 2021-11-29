const {
  ByPassService: { byPass },
} = require('../Services')
const { Message } = require('../Models')

async function store(req, res, next) {
  try {
    const body = await Message.validateAsync(req.body)

    const hasRoom = await req.database.redis.get(`${body.bot.id}-${body.from}`)

    if (hasRoom === null) {
      return res.status(202).json({ message: 'discarded', status: 202 })
    }

    const response = await byPass(body)

    return res.status(response.status).json(response)
  } catch (error) {
    return next(error)
  }
}

module.exports = { store }
