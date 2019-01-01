'use strict'

var User = require('../models/user');

var controller = {
	
	saveUser: function(req, res){
		var user = new User();
		var params = req.body;

		user.name = params.name;
		user.job = params.job;
		user.web = params.web;
		user.description = params.description;

		user.save((err, userStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!userStored) return res.status(404).send({message: 'No se ha podido guardar el Usuario.'});

			return res.status(200).send({
				user: userStored,
				message: "Usuario Creado"
			});
		});
	},

	getUser: function(req, res){
		var userId = req.params.id;

		if(userId == null) return res.status(404).send({message: 'El Usuario no existe.'});

		User.findById(userId, (err, user) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!user) return res.status(404).send({message: 'El id del Usuario no existe.'});

			return res.status(200).send({
				user
			});

		});
	},

	getUsers: function(req, res){

		User.find({}).sort('-_id').exec((err, users) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!users) return res.status(404).send({message: 'No hay Usuarios que mostrar.'});

			return res.status(200).send({users});
		});

	},

	updateUser: function(req, res){
		var userId = req.params.id;
		var update = req.body;

		User.findByIdAndUpdate(userId, update, {new:true}, (err, userUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!userUpdated) return res.status(404).send({message: 'No existe el Usuario para actualizar'});

			return res.status(200).send({
				user: userUpdated,
				message: "Usuario Actualizado"
			});
		});

	},

	deleteUser: function(req, res){
		var userId = req.params.id;

		User.findByIdAndRemove(userId, (err, userRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el Usuario'});

			if(!userRemoved) return res.status(404).send({message: "No se puede eliminar ese Usuario."});

			return res.status(200).send({
				user: userRemoved,
				message: "Usuario Eliminado"
			});
		});
	},


};

module.exports = controller;