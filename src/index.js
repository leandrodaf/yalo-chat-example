const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Logger = require('./Logger')

const database = require('./Database')
const config = require('../config')
const Router = require('./Router')
const Handler = require('./Handler')

const app = express()

app.use(database)

app.use(Logger.pinoHttp)
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1', Router)
app.use(Handler)

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
})
