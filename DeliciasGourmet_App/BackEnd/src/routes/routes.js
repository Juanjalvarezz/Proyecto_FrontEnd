var express = require('express');
var router = express.Router();
const { authenticate } = require('../../middlewares')
//Controladores de Index
const {index} = require('../controllers/index')

//Rutas de Index
router.get("/",index);

router.get("/ruta-protegida", authenticate, index);

module.exports = router;