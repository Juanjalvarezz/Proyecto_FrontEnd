const index = (req, res) => {
    const data = [{
        "id": 1,
        "nombre": "Swagger"
    },{
        "id": 2,
        "nombre": "Swagger2"
    }]
    res.send(data);
}

module.exports = {index};