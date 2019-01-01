'use strict'

var controller = {
	
	home: function(req, res){
		return res.status(200).send({
			res.render('index');
		});
	}
};

module.exports = controller;