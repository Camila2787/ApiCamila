const {router, Router}=require('express')

const route = Router()


const {getProveedores, postProveedores,putProveedores , deleteProveedores} = require('../controllers/proveedores')//importando el controlador

   //listar todos los datos
/*    route.get('/',(req, res)=>{
        res.json({
            msg:'GET'
        })
 
    })
    */
 //consultar dato
    route.get('/', getProveedores) 
      

    route.post('/', postProveedores)  

    route.put('/', putProveedores)  

    route.delete('/', deleteProveedores)  






//     route.post('/',(req, res) =>{
//         const {documento,nombre,apellidos}=req.query
//         aprendices.push({
//             "documento":documento,
//             "nombre":nombre,
//             "apellidos":apellidos
//         })
//         res.json({
//             msg:aprendices
//         })

//     })//insertar datos
  
//     route.delete('/',(req, res) =>{
//         //implementa la logica


  
//     res.json({
//         msg:'eliminacion exitosa'
//     })
//    })
   module.exports = route


