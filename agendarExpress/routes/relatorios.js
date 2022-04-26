const express = require('express');
const router = express.Router();
const relatoriosController = require('../controllers/relatoriosController')

router.get('/', relatoriosController.relatorios);

module.exports = router;