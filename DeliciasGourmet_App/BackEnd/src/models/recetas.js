const mongoose = require('mongoose')

const recetasSchemas = new mongoose.Schema(
    {
        nombre:{
            type: String
        },
        tiempo_preparación:{
            type: String        //Modificar
        },
        ingredientes:{
            type: String
        },
        preparación:{
            type: String
        }
    }
);
    //Crear Colección
module.exports = mongoose.model('recetas_submits', recetasSchemas)
