var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController')

router.post('/', usuarioController.usuario)

module.exports = router;