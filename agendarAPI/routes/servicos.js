const express = require("express")
const router = express.Router()
const servicosController = require('../controllers/servicosController')

router.get('/', servicosController.list)

module.exports = router;