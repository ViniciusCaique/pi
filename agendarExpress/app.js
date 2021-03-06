var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registrarRouter = require('./routes/registrar');
var relatoriosRouter = require('./routes/relatorios');
var agendaRouter = require('./routes/agenda');
var vendaRouter = require('./routes/venda');
var caixaRouter = require('./routes/caixa');
var servicosRouter = require('./routes/servicos');
var clientesRouter = require('./routes/clientes');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session( {secret: "teste" }))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Login', loginRouter);
app.use('/Registrar', registrarRouter);
app.use('/Relatorios', relatoriosRouter);
app.use('/Agenda', agendaRouter);
app.use('/Venda', vendaRouter);
app.use('/Caixa', caixaRouter);
app.use('/Servicos', servicosRouter);
app.use('/Clientes', clientesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
