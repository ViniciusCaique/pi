const express = require('express');
const router = express.Router();
const registrarController = require('../controllers/registrarController')

router.get('/', registrarController.registrar)
router.post('/', registrarController.create)

module.exports = router