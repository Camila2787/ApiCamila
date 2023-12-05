const { response } = require('express');
const Cotizacion = require('../models/cotizacion');

const getCotizaciones = async (req, res) => {
    try {
        const cotizacion = await Cotizacion.find();
        res.json({
            msg: cotizacion
        });
    } catch (error) {
        res.json({
            msg: error
        });
    }
};

const postCotizaciones = async (req, res) => {
    const datos = req.body;
    let mensaje = 'Inserción exitosa';
    try {
        const nuevaCotizacion = new Cotizacion(datos);
        await nuevaCotizacion.save();
        console.log(nuevaCotizacion);
    } catch (error) {
        mensaje = error;
        console.log(error);
    }
    res.json({
        msg: mensaje
    });
};

const putCotizaciones = async (req, res) => {
    const {NoCotizacion, formaPago, ordenPedido, nombreRazonSocial, nitDocumento, telefono, direccion, correo, nombreProducto, cantidadProducto} = req.body;
    let mensaje = 'Actualización exitosa';

    try {
        await Cotizacion.findOneAndUpdate({ NoCotizacion:NoCotizacion}, {
            formaPago: formaPago,
            ordenPedido: ordenPedido,
            nombreRazonSocial: nombreRazonSocial,
            nitDocumento: nitDocumento,
            telefono: telefono,
            direccion: direccion,
            correo: correo,
            nombreProducto: nombreProducto,
            cantidadProducto: cantidadProducto,
        });
    } catch (error) {
        mensaje = error;
    }

    res.json({
        msg: mensaje
    });
};

const deleteCotizaciones = async (req, res) => {
    const { NoCotizacion} = req.query;
    let mensaje = 'Eliminación Exitosa';

    try {
        await Cotizacion.findOneAndDelete({ NoCotizacion: NoCotizacion});
    } catch (error) {
        mensaje = error;
    }

    res.json({
        msg: mensaje
    });
};

module.exports = {
    getCotizaciones,
    postCotizaciones,
    putCotizaciones,
    deleteCotizaciones
};

