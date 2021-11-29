const express = require('express')

const router = express.Router()
const { WebHookController, ChatController } = require('../Controllers')

router.post('/webhook', WebHookController.store)

router.post('/chat/turn/on', ChatController.turnOn)
router.post('/chat/turn/off', ChatController.turnOff)

module.exports = router
