const model = require('../models/solicitud');

const solicitud = async (req, res) => {
  try {
    console.log(req.body);

    const data = new model(req.body)
    await data.save();
    
    res.status(200).json({message: "Solicitud enviada",status:200});
  } catch (error) {

    console.log('Error', error);
    res.status(500).json({message: "Error al enviar solicitud",status:500});
  }


};

module.exports = {solicitud};
