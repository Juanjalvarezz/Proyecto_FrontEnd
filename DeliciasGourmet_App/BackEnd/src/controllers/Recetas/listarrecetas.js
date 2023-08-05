const recetas_submits = require('../../models/recetas');
const listarrecetas = async (req, res) => {
    try {
      
      const registro = await recetas_submits.find().exec();
       if (!registro) {
         return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.status(200).json(registro );
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


module.exports = {listarrecetas};