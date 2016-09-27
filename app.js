import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import localize from 'localize'

//var Localize = new localize('

//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/data', express.static(path.join(__dirname, 'data')));

import url from 'url'
import route from './core/route.js'
app.use('/', (req, res, next) => {
    // Check domain prefix
    let host = req.get('host');
    let prefix = ''
    let domain = host.split('.').slice(-1)[0].split(':').shift()
    console.log("DOMAIN", domain)
    if (domain != 'localhost')
      domain = host.split('.').slice(-2).join('.').split(':').shift()
    prefix = host.match("^(.*)"+domain+":[0-9]+$")[1].slice(0,-1)
    console.log("PREFIX", prefix)
    switch(prefix) {
      case '':
      case 'fr':
        console.log("LOCAL FR")
        break
      case 'en':
        console.log("LOCAL FR")
        break
      default:
        return false
    }
    next()
})

app.use('/', route)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

console.log("end")
