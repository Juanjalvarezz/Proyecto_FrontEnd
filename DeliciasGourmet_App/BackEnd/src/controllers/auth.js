const {
  encryptPassword,
  generateToken,
  comparePassword,
} = require("../middlewares/middlewares");
const model = require('../models/user');

const register = async (req, res) => {
  const role = "User";
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const hash = await encryptPassword(password);

    const user = { name, email, 'password':hash, role}
    const data = new model(user)

    const token = generateToken(user);

    console.log(hash,token,user)
    try {
      //Se procede a guardar
      await data.save();
      //En tal caso todo haya salido bien
      res.status(200).json({message: "Registro Exitoso",token});
    } catch (error) {
      //Caso contrario
      console.log('Error', error);
      res.status(500).json({message: "Error al guardar el documento"});
    }    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    // POR HACER: Buscar el usuario en la base de datos
    // const user = await User.findOne({ where: { email } });
    // if (!user) {
    //   return res.status(404).json({ message: "Usuario no encontrado" });
    // }
    const user = { email, password }

    // const match = await comparePassword(password, user.password);
    const match = await comparePassword(password, "$2b$10$UvEaSWitHEv4mn6AeTvQ5e6CJ6PjpPm5WbPib2PxDAzV12Dza2QLa");
    if (!match) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
