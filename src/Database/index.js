const Redis = require('./Redis')

module.exports = async (req, res, next) => {
  req.database = {
    redis: await Redis(),
  }

  return next()
}
