const { Schema, model } = require('mongoose');

const CompraSchema = new Schema({
    nombreInsumo: {
        type: String,
    },
    fecha: {
        type: String
    },
    Proveedor: {
        type: String,
        
    },
    numRecibo: {
        type: String,
        unique: true
    },
    IVA: {
        type: String
    },
    total: {
        type: Number,
        default: 0,
    },
    cantidad: {
        type: Number,
    }
});

module.exports = model('Compra', CompraSchema);


