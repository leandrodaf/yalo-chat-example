const { TurnOn, TurnOff } = require('../Models')
const { ttl } = require('../../config')

async function turnOn(req, res, next) {
  try {
    const {
      phoneNumber,
      bot: { id },
    } = await TurnOn.validateAsync(req.body)

    const result = await req.database.redis.set(`${id}-${phoneNumber}`, 'true', {
      EX: ttl,
      NX: true,
    })

    res.status(200).json({ result, key: `${id}-${phoneNumber}` })
  } catch (error) {
    next(error)
  }
}

async function turnOff(req, res, next) {
  try {
    const {
      phoneNumber,
      bot: { id },
    } = await TurnOff.validateAsync(req.body)

    await req.database.redis.del(`${id}-${phoneNumber}`)

    res.status(200).json()
  } catch (error) {
    next(error)
  }
}

module.exports = { turnOn, turnOff }
