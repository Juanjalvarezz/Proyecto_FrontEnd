const model = require('../models/user');

const registro = async (req, res) => {
  try {
    //Omitir Console
    console.log(req.body);
    //Recibimos la data, y lo modelamos en base al Schemas realizado(En este caso, de usuario)
    const data = new model(req.body)
    //Se procede a guardar
    await data.save();
    //En tal caso todo haya salido bien
    res.status(200).json({message: "Documento guardado"});
  } catch (error) {
    //Caso contrario
    console.log('Error', error);
    res.status(500).json({message: "Error al guardar el documento"});
  }

};

module.exports = {registro};
