var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');

var app = express();


var production = process.env.NODE_ENV === 'production';
var port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use('/public', express.static('public'));

if (process.env.NODE_ENV === "development") {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

app.get('/', function (req, res) {
  res.render('home', {
    bodyClass: 'home',
    data: 'dummy data'
  });
});

app.get('/fa-hjelp', function (req, res) {
  res.render('get-help', {
    bodyClass: 'get-help',
    data: 'dummy data'
  });
});

app.get('/gi-hjelp', function (req, res) {
  res.render('give-help', {
    bodyClass: 'give-help',
    data: 'dummy data'
  });
});

app.get('/lag-avtale', function (req, res) {
  res.render('set-date', {
    bodyClass: 'set-date',
    data: 'dummy data'
  });
});

app.get('/velg-hjelper', function (req, res) {
  res.render('choose-helper', {
    bodyClass: 'choose-helper',
    data: 'dummy data'
  });
});

app.get('/kvittering', function (req, res) {
  res.render('confirmation', {
    bodyClass: 'confirmation',
    data: 'dummy data'
  });
});

app.listen(port);

if (app.settings.env === 'development') {
  console.log('running on localhost:' + port);
}
