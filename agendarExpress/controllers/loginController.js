const bcrypt = require('bcrypt');



const login = (req,res) => {
  let {nome, senha} = req.body;
  req.session.logado = true;
  res.render('login');
};

const index = (req, res) => {
  res.redirect('/servicos')
}

module.exports = {
  login, index
};


