const express = require('express');
const router = express.Router();
const vendaController = require('../controllers/vendaController')

router.get('/', vendaController.venda);

module.exports = router;