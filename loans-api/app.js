var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");


var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/LoanManager')
//Importing StudentModel class ..

var studentModel = require('./models/student.model');

//custome moduleso or routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/students')
var codiftRouter = require('./routes/codift')
var customersRouter = require('./routes/customers')
var invoicesRouter = require('./routes/invoices')
var auditsRouter = require('./routes/audits')
var loansRouter = require('./routes/loans')
var paymentsRouter = require('./routes/payments')
var settingsRouter = require('./routes/settings')


var app = express();
// to resolve localhost issues while loading .....
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students',studentRouter);
app.use('/customers',customersRouter);
app.use('/audits',auditsRouter);
app.use('/payments',paymentsRouter);
app.use('/loans',loansRouter);
app.use('/settings',settingsRouter);
app.use('/invoices',invoicesRouter);
app.use('/codifts',codiftRouter);


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
