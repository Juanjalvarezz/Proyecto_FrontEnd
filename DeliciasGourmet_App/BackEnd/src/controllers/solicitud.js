const model = require('../models/solicitud');

const solicitud = async (req, res) => {
  try {
    console.log(req.body);

    const data = new model(req.body)
    await data.save();
    
    res.status(200).json({message: "Documento guardado"});
  } catch (error) {

    console.log('Error', error);
    res.status(500).json({message: "Error al guardar el documento"});
  }


};

module.exports = {solicitud};
