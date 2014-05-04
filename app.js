/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express()

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/public');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', routes.index);
app.get('/users', user.list);
*/

app.get('home', function (req,res) {
	res.render('home');
});

app.get('create', function (req,res) {
	res.render('create');
});

app.get('signup', function (req,res) {
	res.render('signup');
});

app.get('/signin', function (req,res) {
	res.render('signin');
});

app.get('/', function (req,res) {
	res.render('index');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
