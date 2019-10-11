const express = require('express');
const morgan = require('morgan');

const app = express();

//requiriendo rutas

const routes = require ('./routes');

//Settings

app.set('appName', 'Mi primer server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Middlewares

app.use(morgan('short'));

app.use(routes);

app.listen(3000, function (){
	console.log('Servidor funcionando');
	console.log('Nombre de la app: ', app.get('appName'));
});
