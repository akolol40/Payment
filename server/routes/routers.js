const express = require('express')
const router = express.Router();
const apiVersion = 'v1'
const controller = require('../controller/controller')

router.post('/'+apiVersion+'/createPayment', controller.createPayment) 
module.exports = router