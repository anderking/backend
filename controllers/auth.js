'use strict'

const User = require('../models/user');
const service = require('../services/auth');

var controller = {

	signUp: function (req, res)
	{
		const user = new User(
		{
			email: req.body.email,
			name: req.body.name,
			password: req.body.password
		});
		
		user.save( (err) =>
		{
			if (err)
			{
				return res.status(500).send({
					message: `Error al crear el usuario: ${err}`,
				});
			}
			return res.status(201).send({
				token: service.createToken(user),
				user,
				message: `El password del usuario: ${user.password}`
			});
		});
	},

	signIn: function (req, res)
	{
		User.find
		(
			{
				email: req.body.email
			},
			(err, user) =>
			{
				if (err)
				{
					return res.status(500).send({ message: err });
				}
				if(req.body.email==null){
					return res.status(404).send({ message: 'No se encuentra el campo email' });	
				}
				if (user.length<=0)
				{
					return res.status(404).send({ message: 'No existe el usuario' });
				}else
				{
					req.user = user;
					res.status(200).send(
					{
						message: 'Te has logueado correctamente',
						user,
						token: service.createToken(user)
					});
				}
			}
		);
	}

}

module.exports = controller;