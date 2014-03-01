
var countriesModel = require('../models/countriesModel.json');

exports.index = function(req, res){
  res.render('index');
};

exports.find = function(req,res){
	res.send(countriesModel);
};