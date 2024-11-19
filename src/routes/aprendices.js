const express = require('express');
const ruta = express.Router();
const path = require("path");
const multer = require('multer');
const aprendizController=require('../controllers/aprendicesController');

// Configuración de multer para subir archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

ruta.get('/', aprendizController.obtener);
ruta.post('/cargar', upload.single('file'), aprendizController.cargar);

module.exports = ruta;