'use strict'
var mongoose = require('mongoose');

var app = require('./app');
var { url } = require('./config/database');
var port = 3700;
/*
mongoose.connect(url,{
	useNewUrlParser:true
})
	app.listen(port, () => {
    	console.log('Servidor corriendo correctamente en la url: localhost:'+port+'');
    });
*/

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
	.then(()=>{
		console.log('Conexion a la BD exitosa');
		// Creacion del servidor
    	app.listen(port, () => {
    		console.log('Servidor corriendo correctamente en la url: localhost:'+port+'');
    	});
	})
	.catch(err=>console.log(err));
