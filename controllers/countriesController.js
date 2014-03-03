
var countriesModel = require('../models/countriesModel.json');

exports.index = function(req, res){
  res.render('index');
};

exports.find = function(req,res){
	var term = req.body.term
	var filter = countriesModel.filter(function(term){
		return term.name.toUpperCase().indexOf(req.body.term.toUpperCase())===0;// "">=0" for any character entered
	});
	res.send(filter);
};