const express = require('express');
const router = express.Router();
const caixaController = require('../controllers/caixaController')

router.get('/', caixaController.caixa);

module.exports = router;