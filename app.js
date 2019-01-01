'use strict'

//Requerimos todos los paquetes que necesitaremos
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

//Usamos express un manejo mas simplificado de nodejs
var app = express();

//require('./passport/local-auth')(passport);
/*
// settings
app.set('views', path.join(__dirname, 'views'));
//app.engine('ejs', engine);
app.set('view engine', 'ejs');
*/
// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*app.use(morgan('dev'));
app.use(cookieParser);
app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
*/
// Configurar cabeceras y cors

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// cargar archivos rutas
//require('./routes/auth')(app,passport);
var project_routes = require('./routes/project');
var user_routes = require('./routes/user');

// rutas
app.use('/api', project_routes);
app.use('/api', user_routes);


// exportar
module.exports = app;
