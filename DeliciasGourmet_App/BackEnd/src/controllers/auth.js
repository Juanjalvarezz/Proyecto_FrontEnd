const {
  encryptPassword,
  generateToken,
  comparePassword,
} = require("../../middlewares");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const hash = await encryptPassword(password);

    // POR HACER: Guardar usuario en la base de datos
    // const user = await User.create({ username, email, password: hash });
    const user = { username, email, password }

    const token = generateToken(user);
    res.status(201).json({ token });
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
