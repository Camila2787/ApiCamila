const { Schema, model } = require('mongoose');

const CotizacionShema = new Schema({
    NoCotizacion: {
        type: Number,
        unique: true
    },
    formaPago: {
        type: String
    },
    ordenPedido: {
        type: Number,
        
    },
    nombreRazonSocial: {
        type: String,
    },
    nitDocumento: {
        type: Number
    },
    telefono: {
        type: Number,
    },
    direccion: {
        type: String,
    },
    correo: {
        type: String,
    },
    nombreProducto: {
        type: String,
    },
    cantidadProducto:{
        type: String,
    }

});

module.exports = model('Cotizacion', CotizacionShema);



