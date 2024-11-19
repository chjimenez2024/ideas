const mysql=require("mysql");
const path = require("path");
const express = require("express");
const app = express();
const morgan = require('morgan');
const myConexion = require('express-myconnection');

//importar rutas
const ideasRutas=require('./routes/ideas');
const aprendicesRutas=require('./routes/aprendices');
const empresasRutas=require('./routes/empresas');
const conaprendicesRutas=require('./routes/conaprendices');
const conideasRutas=require('./routes/conideas');


//configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares
app.use(morgan('dev'));
app.use(myConexion(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: '3306',
	database: 'ideas'
}, 'single'));

app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', ideasRutas);
app.use('/aprendices', aprendicesRutas);
app.use('/empresa', empresasRutas);
app.use('/consulta', conaprendicesRutas);
app.use('/conideas', conideasRutas);


//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//carga pagina principal
app.get('/', (req, res) => {
    res.render('index');
});

//empezando el servidor
app.listen(app.get('port'), () => {
	console.log("Server en el puerto 3000");
});