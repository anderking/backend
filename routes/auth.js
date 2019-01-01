'use strict'

//var AuthController = require('../controllers/auth');

//router.post('/login', UserController.getUser);
//router.get('/register', UserController.saveUser);
//router.get('/logout', UserController.getUsers);

module.exports = (app, passport) => {
	
	//app.get('/', AuthController.home);
	app.get('/', (res,req) =>{
		res.render('index');
	});
}