const express = require('express');
const router = express.Router();
const servicosController = require('../controllers/servicosController')

router.get('/', servicosController.servicos);

module.exports = router;