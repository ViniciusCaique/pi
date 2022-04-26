const bcrypt = require('bcrypt');



const registrar = (req,res) => {
  res.render('registrar')
}

const create = (req, res) => {
  let {nome, email, senha} = req.body;
  res.redirect('/Login');
}

module.exports = {
  registrar, create
}