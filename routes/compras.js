const { Router } = require('express');
const router = Router();

const { getCompras, postCompras, putCompras, deleteCompras } = require('../controllers/compras');

// Listar todos los datos
router.get('/', getCompras);

// Consultar dato
router.post('/', postCompras);

// Insertar datos
router.put('/', putCompras);

// Eliminar datos
router.delete('/', deleteCompras);

module.exports = router;



