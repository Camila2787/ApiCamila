const express = require('express')
const cors = require('cors')//implementar seguridad
const bodyParser = require('body-parser')//convertir el objeto enviado desde el form
const { dbConection } = require('../database/config')

//crear array

class Server{

    constructor(){
        this.app = express()
        this.port= process.env.PORT
        this.comprasPath ='/compras'//Ruta de la api
        this.middlewares()//puente para hacer peticiones entre el html y la api
        this.routes()
        this.conectarDB()
       
    }
listen(){
   this.app.listen(
    this.port, () =>{
     console.log('escuchando por el puerto '+this.port)


    }
   )
}

routes(){
    this.app.use(this.comprasPath, require('../routes/compras'))
   }

   middlewares(){//puente del front-end y el back-end
    this.app.use( cors()); //Indicar el uso de cors
    this.app.use(bodyParser.json())//parsear objetos a insertar en la bd
}
   async conectarDB(){
     await dbConection()


   }



}



module.exports ={Server}//exportacion de la clase.

//http://github
//crear el metodo get y post para una coleccion de su proyecto
//emplear un array de objetos para alamcednar la informacion