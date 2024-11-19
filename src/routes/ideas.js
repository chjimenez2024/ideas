const express = require('express');
const ruta = express.Router();
const ideasController=require('../controllers/ideasController');

ruta.get('/ideas', ideasController.lista);
ruta.get('/ideas/puntos-sector/:id', ideasController.puntosSector);
ruta.get('/ideas/puntos-factor/:id', ideasController.puntosFactor);
ruta.get('/ideas/puntos-experiencia/:id', ideasController.puntosExperiencia);
ruta.post('/guardarideas', ideasController.guardar);

module.exports = ruta;