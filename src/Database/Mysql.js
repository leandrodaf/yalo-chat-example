const mysql = require('mysql')

const {
  database: { mysql: mysqlConfig },
} = require('../../config')

const pool = mysql.createPool(mysqlConfig)

module.exports = {
  pool,
  query: async (query) =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) reject(err)
        connection.query(query, (error, results, fields) => {
          connection.release()
          if (error) reject(error)
          return resolve([results, fields])
        })
      })
    }),
}
