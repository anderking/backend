'use strict'

var controller = {
	
	home: function(req, res){
		res.render('index');
	},
	login: function(req, res){
		res.render('login');
	},
	register: function(req, res){
		res.render('register');
	},
	logout: function(req, res){
		res.render('index');
	},
};

module.exports = controller;