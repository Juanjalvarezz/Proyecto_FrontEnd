const {
  encryptPassword,
  generateToken,
  comparePassword,
} = require("../middlewares/middlewares");
const model = require('../models/user');
const mongoose = require('mongoose');

const register = async (req, res) => {
  const role = "User";
  try {
    const { name, email, password, phone, username, gender } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Faltan datos", status: 400});
    }

    const hash = await encryptPassword(password);

    const user = { name, email, 'password':hash, role,phone,username, gender}
    const data = new model(user)

    const token = generateToken(user);

    console.log(hash,token,user)
    try {
      //Se procede a guardar
      await data.save();
      //En tal caso todo haya salido bien
      res.status(200).json({message: "Registro Exitoso",token, userActive:user, status: 200});
    } catch (error) {
      //Caso contrario
      console.log('Error', error);
      res.status(500).json({message: "Error al guardar el documento", status: 500});
    }    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos", status: 400});
    }

    const datas = async (dato) => {
      const documents = await model.find({"email": dato})
      return documents;
    }
    
    const data = await datas(email)

    if (!data) {
       return res.status(404).json({ message: "Usuario o contraseña incorrectos", status: 404 });
    }

    const user = { email, password }

    // const match = await comparePassword(password, user.password);
    const match = await comparePassword(user.password, data[0].password);
    if (!match) {
      return res.status(401).json({ message: "Contraseña o Usuario incorrecto",status: 401});
    }

    const data2 = {
      username: data[0].username,
      email: data[0].email,
      role: data[0].role
    }

    const token = generateToken(data2);

    res.status(200).json({ token, userActive: data2 ,message: "Inicio de Sección Exitoso", status: 200 });

  } catch (error) {
    res.status(500).json({ message: "Contraseña o Usuario incorrecto", message1: error.message, status: 500 });
  }
};

module.exports = { register, login };
