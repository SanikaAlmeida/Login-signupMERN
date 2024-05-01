const {register,log} = require('../controller/User')
const express = require('express')
const router = express.Router()

router.post('/signup',register)
router.post('/login',log)

module.exports = router 