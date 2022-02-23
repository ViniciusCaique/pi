const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('venda')
})

module.exports = router;