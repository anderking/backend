'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
	name: String,
	description: String,
	category: String,
	year: Number,
	langs: String,
	image: String,
	userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" } 
}, {
    versionKey: false
});

module.exports = mongoose.model('Project', ProjectSchema);
// projects  --> guarda los documents en la coleccion