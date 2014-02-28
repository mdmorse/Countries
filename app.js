
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var countriesController = require('./controllers/countriesController');
var countriesModel = require('./models/countriesModel');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', countriesController.index);

app.get('/countries', function(req,res){
	res.send(countriesModel);
});
app.get('/search', function(req,res){
	res.send(countriesController);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
