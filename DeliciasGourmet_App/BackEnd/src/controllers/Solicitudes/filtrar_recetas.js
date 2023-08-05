//Se lee los models de Recetas
const recetas_submits = require('../../models/recetas');

//Se filtran por las últimas 5 recetas agregadas a la tabla

//Se inicializa la función filtrarrecetas para leer las Recetas
const filtrarrecetas = async (req, res) => {
   try {                                                     //Se validan si no hay un error      
      const registro = await recetas_submits.find().sort({_id:-1}).limit(5).exec();  //Se espera una respuesta y se utiliza find y limit para solo consultar 5 para consultar la tabla
      if (!registro) {                                       //Se condiciona si no se encuentran registros 
         return res.status(404).json({ message: "Recetas no encontradas" });    //Si la respuesta del servidor es 404 Se muestra el mensaje
      }
      res.status(200).json(registro );                      //Si la busqueda es satisfactoria se muestra la información
      } 
   catch (error) {                                          //Se muestran los diferentes errores posibles
      res.status(500).json({ message: error.message });
   }
}
module.exports = {filtrarrecetas};                          //Se exporta listarsolicitudes