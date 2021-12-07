const Redis = require('./Redis')
const Mysql = require('./Mysql')

module.exports = async (req, res, next) => {
  req.database = {
    redis: await Redis(),
    mysql: Mysql.query,
  }

  return next()
}
