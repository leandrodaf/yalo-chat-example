const { createClient } = require('redis')
const { database } = require('../../config')
const { Log } = require('../Logger')
const client = createClient(database.redis)

client.on('error', (err) => Log.info('Redis Client Error', err))

async function start() {
  if (!client.isOpen) {
    await client.connect()
  }
  return client
}

module.exports = start
