const session = require('express-session');

  //if(){
    //res.redirect('/Login')
  //}




const servicos = (req,res) => {
  if(req.session.logado === true){
    res.render('servicos')
  } else {
    console.log("Realize login para acessar a página")
    res.redirect('/Login')
  }
  
}

module.exports = {
  servicos
}