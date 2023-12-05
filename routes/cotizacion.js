const { Router } = require('express');
const router = Router();

const { getCotizaciones, postCotizaciones, putCotizaciones, deleteCotizaciones } = require('../controllers/cotizacion');

// Listar todos los datos
router.get('/', getCotizaciones);

// Consultar dato
router.post('/', postCotizaciones);

// Insertar datos
router.put('/', putCotizaciones);

// Eliminar datos
router.delete('/', deleteCotizaciones);

module.exports = router;




