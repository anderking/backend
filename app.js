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
var engine = require('ejs');

//Usamos express un manejo mas simplificado de nodejs
var app = express();

require('./config/passport')(passport);

// settings
app.set('views', path.join(__dirname, 'views'));

/*habilitar para usar y renderizar las vistas con un motor de plantillas en js*/
app.engine('ejs', engine.renderFile);
app.set('view engine', 'ejs');

/*habilitar para usar y renderizar las vistas normalmente en html*/
//app.engine('html', engine.renderFile);
//app.set('view engine', 'html');
/*static indicas las rutas en donde tenemos los archivos que deben renderizarse en la vista*/
//app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// cargar archivos rutas
var auth_routes = require('./routes/routes')(app,passport);
var project_routes = require('./routes/project');
var user_routes = require('./routes/user');

// rutas
app.use('/api', project_routes);
app.use('/api', user_routes);
//app.use('/api', auth_routes);

// exportar
module.exports = app;
