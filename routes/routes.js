module.exports = (app, passport) => {

	// index routes
	app.get('/', (req, res) => {
		res.render('index');
	});

	app.get('/api', (req, res) => {
		res.render('index');
	});


	//login view
	app.get('/api/login', (req, res) => {
		res.render('login.ejs', {
			message: req.flash('loginMessage')
		});
	});

	app.post('/api/login', passport.authenticate('local-login', {
		successRedirect: '/api/profile',
		failureRedirect: '/api/login',
		failureFlash: true
	}));

	// signup view
	app.get('/api/signup', (req, res) => {
		res.render('signup', {
			message: req.flash('signupMessage')
		});
	});

	app.post('/api/signup', passport.authenticate('local-signup', {
		successRedirect: '/api/profile',
		failureRedirect: '/api/signup',
		failureFlash: true // allow flash messages
	}));

	//profile view
	app.get('/api/profile', isLoggedIn, (req, res) => {
		res.render('profile', {
			user: req.user
		});
	});

	// logout
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}
