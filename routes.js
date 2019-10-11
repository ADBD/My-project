const express = require('express');
const router = express.Router();
//Routes and images

router.get('/', (req, res) => {
	res.render('index.ejs')
});

router.get('/login', (req, res) => {
	res.render('login');
});

router.get('*', (req, res) => {
	res.end('Archivo no encontrado');
});

module.exports = router;
