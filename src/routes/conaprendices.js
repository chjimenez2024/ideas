const express = require('express');
const ruta = express.Router();
const conaprendicesController=require('../controllers/conaprendicesController');

ruta.get('/', conaprendicesController.lista);
ruta.get('/eliminar/:id', conaprendicesController.eliminar);
ruta.get('/actualizar/:id', conaprendicesController.editar);
ruta.post('/actualizar/:id', conaprendicesController.actualizar);

module.exports = ruta;