const db = require('../models')
const Usuario = db.Usuario
const bcrypt = require('bcrypt')

const usuario = (req, res) => {
  let {nome, email, senha} = req.body
  let senhaC = bcrypt.hash(senha, 10)
  let contaNova = {nome, email, senha}

  db.Usuario.create(contaNova)
  .then((result) => {
    res.status(201).send('passou')
  })
  .catch((err) => {
    res.status(500).send('erro na criação')
  })
}

module.exports = {
  usuario
}