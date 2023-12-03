const { response } = require('express');
const Compras = require('../models/compras');

const getCompras = async (req, res) => {
    try {
        const compra = await Compras.find();
        res.json({
            msg: compra
        });
    } catch (error) {
        res.json({
            msg: error
        });
    }
};

const postCompras = async (req, res) => {
    const datos = req.body;
    let mensaje = 'Inserción exitosa';
    try {
        const nuevaCompra = new Compras(datos);
        await nuevaCompra.save();
        console.log(nuevaCompra);
    } catch (error) {
        mensaje = error;
        console.log(error);
    }
    res.json({
        msg: mensaje
    });
};

const putCompras = async (req, res) => {
    const { _id, nombreInsumo, fecha, Proveedor, numRecibo, IVA, total, imagenRecibo } = req.body;
    let mensaje = 'Actualización exitosa';

    try {
        await Compras.findOneAndUpdate({ _id: _id }, {
            nombreInsumo: nombreInsumo,
            fecha: fecha,
            Proveedor: Proveedor,
            numRecibo: numRecibo,
            IVA: IVA,
            total: total,
            imagenRecibo: imagenRecibo
        });
    } catch (error) {
        mensaje = error;
    }

    res.json({
        msg: mensaje
    });
};

const deleteCompras = async (req, res) => {
    const { id } = req.query;
    let mensaje = 'Eliminación Exitosa';

    try {
        await Compras.findOneAndDelete({ _id: _id });
    } catch (error) {
        mensaje = error;
    }

    res.json({
        msg: mensaje
    });
};

module.exports = {
    getCompras,
    postCompras,
    putCompras,
    deleteCompras
};

