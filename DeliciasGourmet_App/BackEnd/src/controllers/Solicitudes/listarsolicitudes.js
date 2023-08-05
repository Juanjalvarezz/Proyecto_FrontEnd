//Se lee los models de solicitudes
const solicitudes = require('../../models/solicitud');

//Se inicializa la función listarsolicitudes para leer las solicitudes
const listarsolicitudes = async (req, res) => {
    try {                                                        //Se validan si no hay un error
        const solicitud = await solicitudes.find().exec();       //Se espera una respuesta y se utiliza find para consultar la tabla
        if (!solicitud) {                                        //Se condiciona si no se encuentran registros 
            return res.status(404).json({ message: "Solicitudes no encontradas" });   //Si la respuesta del servidor es 404 Se muestra el mensaje
        }
        res.status(200).json(solicitud );                        //Si la busqueda es satisfactoria se muestra la información
    } catch (error) {                                            //Se muestran los diferentes errores posibles
        res.status(500).json({ message: error.message });
    }
}
module.exports = {listarsolicitudes};                            //Se exporta listarsolicitudes