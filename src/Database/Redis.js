const { createClient } = require('redis')
const { database } = require('../../config')

const client = createClient(database.redis)

client.on('error', (err) => console.log('Redis Client Error', err))

async function start() {
  if (!client.isOpen) {
    await client.connect()
  }
  return client
}

module.exports = start
