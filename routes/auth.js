'use strict'

var AuthController = require('../controllers/auth');

module.exports = (app,passport) =>
{
	app.get('/', AuthController.home);
	app.get('/api', AuthController.home);
	app.get('/api/login', AuthController.login);
	app.get('/api/register', AuthController.register);
	app.get('/api/logout', AuthController.logout);
}
