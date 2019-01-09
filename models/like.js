'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LikeSchema = Schema({
	userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	projectID: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
}, {
    versionKey: false
});

module.exports = mongoose.model('Like', LikeSchema);
