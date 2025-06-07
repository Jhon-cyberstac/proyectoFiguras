const express = require('express');
const router = express.Router();
const figurasController = require('../controllers/figurasController');

router.get('/', figurasController.formulario);
router.post('/calcular', figurasController.calcular);

module.exports = router;