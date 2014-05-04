
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override');

var app = express()
	, router = express.Router();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(bodyParser());
//.use(method-override());
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

router.get('/', function(req, res) {
	res.send('index');
})

//app.get('/', routes.index);
//app.get('/users', user.list);


http.createServer(app).listen(3000);

//(app.get('port'), function(){
 // console.log('Express server listening on port ' + app.get('port'));
//});