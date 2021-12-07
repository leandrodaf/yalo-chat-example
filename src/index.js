const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

const Logger = require('./Logger')
const { DatabaseMiddleware } = require('./Database')
const config = require('../config')
const Router = require('./Router')
const Handler = require('./Handler')

const optionsSwagger = {
  customCss: '.swagger-ui .topbar { display: none }',
}

const app = express()

app.use(DatabaseMiddleware)

app.use(Logger.pinoHttp)
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1', Router)
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, optionsSwagger))

app.use(Handler)

app.listen(config.port, () => {
  Logger.Log.info(`Example app listening at http://localhost:${config.port}`)
})
