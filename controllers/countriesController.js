
var countriesModel = require('../models/countriesModel.json');

exports.index = function(req, res){
  res.render('index');
};

exports.find = function(req,res){
	var term = req.body.term
	var filter = countriesModel.filter(function(term){
		return term.name===req.body.term;
	});
	res.send(filter);
};