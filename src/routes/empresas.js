const express = require('express');
const ruta = express.Router();
const empresaController=require('../controllers/empresasController');

ruta.get('/', empresaController.lista);
ruta.post('/add', empresaController.save);
ruta.get('/eliminar/:id', empresaController.eliminar);
ruta.get('/actualizar/:id', empresaController.editar);
ruta.post('/actualizar/:id', empresaController.actualizar);
ruta.get('/aprendices/:ficha', empresaController.listaaprendices);


module.exports = ruta;