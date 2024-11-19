const express = require('express');
const ruta = express.Router();
const conideasController=require('../controllers/conideasController');

ruta.get('/', conideasController.lista);
ruta.get('/eliminar/:id', conideasController.eliminar);


module.exports = ruta;