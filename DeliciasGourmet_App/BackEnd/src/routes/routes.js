var express = require('express');
var router = express.Router();

// ----------- Controladores ---------------

//Middlewares
const { authenticate } = require('../middlewares/middlewares')

//Controladores de authentication
const {register, login} = require('../controllers/auth')

//Controladores de usuarios
const {getUser} = require('../controllers/users')

//Controlador Peticiones

const {solicitud} = require('../controllers/solicitud')

//Controlador Recetas

const {recetasSoli} = require('../controllers/Recetas/recetas')


const {listarrecetas} = require('../controllers/Recetas/listarrecetas')


// ----------- Rutas ---------------

//Rutas de registro
router.post("/registro", register);

//Rutas de login
router.post("/login", login);

//Rutas de usuario
router.get("/usuario", authenticate, getUser);

//Ruta Solicitud (Modificar)
router.post("/solicitud", solicitud)

//Rutas Recetas
router.post("/recetas", recetasSoli)

router.get("/listarrecetas", listarrecetas)

module.exports = router;
