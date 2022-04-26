const res = require('express/lib/response')
const db = require('../models')
const Servicos = db.Servico


const list = (req, res) => {
  const preco = req.query.preco;
  Servicos.findAll()
  .then(resultado => 
     res.status(200).send(resultado)
  )
  .catch(err => 
    res.status(500).send(err.message || 'Erro')  
  )
}

module.exports = {
  list
}

// db.Servicos.findAll()
// .then((a) => {
//   console.log(a)
// })
// .catch((err) => {
//   err.message || 'Erro'
// })

// db.Servicos.findOne()
// .then((b) => {
//   console.log(b)
// })
// .catch((err) => {
//   err.message || 'Erro'
// })