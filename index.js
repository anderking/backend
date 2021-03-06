'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');

mongoose.Promise = global.Promise;

mongoose.connect
(
	config.db,
	{//desabilita los mensajes de advertencia
		useNewUrlParser:true,
		useFindAndModify:true,
		useCreateIndex:true
	},
	
	(err, res) =>
	{
		if (err)
		{
	    	return console.log(`Error al conectar a la base de datos: ${err}`);
	  	}

	  	console.log('Conexión a la base de datos establecida...');
		
		app.listen
		(
			config.port, () =>
			{
				console.log(`API REST corriendo en http://localhost:${config.port}`);
			}
		);
	}
);