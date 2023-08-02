const model = require('../models/recetas');

const recetasSoli = async (req, res) => {
  try {

    const data = new model(req.body)
    await data.save();
    
    res.status(200).json({message: "Receta Agregada exitosamente",status:200});
  } catch (error) {

    console.log('Error', error);
    res.status(500).json({message: "Error al intentar agregar tu receta",status:500});
  }

};

module.exports = {recetasSoli};