const registro = (req, res) => {
    console.log(req.body)

    const {Role, Name, Email, Password} = req.body

    //Codigo de pruena
    
    // Respuesta del servidor
    res.send(req.body)

    
}

module.exports = {registro};