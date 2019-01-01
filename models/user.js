'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	name: String,
	job: String,
	web: String,
	description: String,
});

module.exports = mongoose.model('User', UserSchema);
// projects  --> guarda los documents en la coleccion