var express = require('express');
var router = express.Router();
const { authenticate } = require('../middlewares/middlewares')
//Controladores de Index
const {index} = require('../controllers/index')
const {register, login} = require('../controllers/auth')
const {getUser} = require('../controllers/users')

//Rutas de Index
router.get("/", index);

router.post("/registro", register);

router.post("/login", login);

router.get("/usuario", authenticate, getUser);

module.exports = router;