const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController')

router.get('/', agendaController.agenda);

module.exports = router;