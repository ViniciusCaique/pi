var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan')
var cookieParser = require('cookie-parser');
const port = 8000


var usuarioRouter = require('./routes/usuario');
var servicosRouter = require('./routes/servicos');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usuarioRouter);
app.use('/servicos', servicosRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports = app;
