const  {response} =require('express');


Proveedor = require('../models/compras')

const getCompras = async(req, res) =>{


    const compras = await Compra.find();//obteniendo los datos de la coleccion
     res.json({
        msg: compras
     })

}
const postCompras = async(req, res) => {
    const datos= req.query //capturar datos de la url de postman
    let mensaje='Insercion exitosa'
    try{
        const compra = new Compra(datos)//instaciar el objeto
        await compra.save()//guardar la base de datos
        console.log(compra)

    }catch(error){

        mensaje=error
        console.log(error)

    }
  
    res.json({
        msg: mensaje
    })
}


const putCompras = async(req, res) =>{
    const {id,nombreProveedor,nit,correo,nombreContacto,numeroContacto,estado}=req.query //desestructurar

try{
        const compra = await Compra.findOneAndUpdate({id:id},{nombreProveedor:nombreProveedor,nit:nit,correo:correo,nombreContacto:nombreContacto,numeroContacto:numeroContacto,estado:estado})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
       
        mensaje = 'actualizacion exitosa'
        
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
     
}
   const deleteProveedores = async(req, res) =>{

    const { id}=req.query //desestructurar

    try{
            const proveedor = await Proveedor.findOneAndDelete({id:id})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Eliminacion Exitosa'
            
        }catch(error){
            mensaje=error
         }
         res.json({
            msg: mensaje
         })
         
    }
module.exports={
    getProveedores,
    postProveedores,
    putProveedores,
    deleteProveedores

}
