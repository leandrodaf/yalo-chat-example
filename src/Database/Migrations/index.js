/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-continue */
/* eslint-disable no-await-in-loop */
const fs = require('fs')
const { exit } = require('process')
const Mysql = require('../Mysql')
const { Log } = require('../../Logger')

async function main() {
  const migrtions = fs.readdirSync(__dirname)

  for (let index = 0; index < migrtions.length; index += 1) {
    const migration = migrtions[index]

    if (migration === 'index.js') {
      continue
    }

    try {
      const result = await require(`${__dirname}/${migration}`)(Mysql.query)
      Log.info(`"${migration}" file migrated successfully`, [result])
    } catch (error) {
      Log.error(error, 'unable to perform data migration')
    }
  }

  exit()
}

main()
