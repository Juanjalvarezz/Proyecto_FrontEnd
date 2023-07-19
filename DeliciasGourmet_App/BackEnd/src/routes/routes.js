var express = require('express');
var router = express.Router();

//Controladores de Index
const {index} = require('../controllers/index')

//Rutas de Index
router.get("/",index);

module.exports = router;