const { Schema, model } = require('mongoose');

const CompraSchema = new Schema({
    nombreInsumo: {
        type: String,
        enum: ['tela', 'algodon', 'hilo', 'botones']
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    Proveedor: {
        type: String,
        enum: ['BarahClotes', 'Distribuidora SAS', 'Guildan', 'Disatex', 'Insutex']
    },
    numRecibo: {
        type: String
    },
    IVA: {
        type: String
    },
    total: {
        type: Number,
        default: 0,
    },
    imagenRecibo: {
        type: String
    },
});

module.exports = model('Compra', CompraSchema);


