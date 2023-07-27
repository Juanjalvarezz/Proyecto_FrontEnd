var express = require('express');
var router = express.Router();

// ----------- Controladores ---------------

//Middlewares
const { authenticate } = require('../middlewares/middlewares')

//Controladores de Index
const {index} = require('../controllers/index')

//Controladores de authentication
const {register, login} = require('../controllers/auth')

//Controladores de usuarios
const {getUser} = require('../controllers/users')

//Controlador Peticiones

const {solicitud} = require('../controllers/solicitud')

// ----------- Rutas ---------------

//Rutas de Index
router.get("/", index);

//Rutas de registro
router.post("/registro", register);

//Rutas de login
router.post("/login", login);

//Rutas de usuario
router.get("/usuario", authenticate, getUser);

//Ruta Solicitud (Modificar)
router.post("/solicitud", solicitud)

module.exports = router;
