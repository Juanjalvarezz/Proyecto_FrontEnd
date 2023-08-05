//Se lee los models de Recetas
const recetas_submits = require('../../models/recetas');

//Se inicializa la función listarrecetas para leer las Recetas
const listarrecetas = async (req, res) => {
   try {                                                     //Se validan si no hay un error      
      const registro = await recetas_submits.find().exec();  //Se espera una respuesta y se utiliza find para consultar la tabla
      if (!registro) {                                       //Se condiciona si no se encuentran registros 
         return res.status(404).json({ message: "Recetas no encontradas" });    //Si la respuesta del servidor es 404 Se muestra el mensaje
      }
      res.status(200).json(registro );                      //Si la busqueda es satisfactoria se muestra la información
      } 
   catch (error) {                                          //Se muestran los diferentes errores posibles
      res.status(500).json({ message: error.message });
   }
}
module.exports = {listarrecetas};                          //Se exporta listarsolicitudes