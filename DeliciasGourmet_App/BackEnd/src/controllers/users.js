
  const getUser = async (req, res) => {
    try {
      const token = req.headers.authorization;

      // POR HACER: Buscar el usuario en la base de datos
      // const user = await User.findByPk(payload.id);
      // if (!user) {
      //   return res.status(404).json({ message: "Usuario no encontrado" });
      // }

      res.status(200).json({ user: { nombre: 'obtener de la db'} });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


module.exports = {getUser};