const mongoose = require('mongoose')

const recetasSchemas = new mongoose.Schema(
    {
        nombre:{
            type: String
        },
        tiempo_Preparación:{
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