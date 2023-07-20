const jwt = require('jsonwebtoken');

// Middlewares de JSON web token
function generateAccessToken(data) {
  return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

function verifyToken(token, callback) {
  jwt.verify(token, process.env.TOKEN_SECRET, callback);
}

function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  verifyToken(token, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

// Middleware para la gestion de errores
function errorHandler(err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? 'Ha ocurrido un error inesperado.' : err.stack
  });
}

function notFound(req, res, next) {
  res.status(404);
  const error = new Error(`Busqueda No Encontrada - ${req.originalUrl}`);
  next(error);
}

module.exports = {
  notFound,
  errorHandler,
  generateAccessToken,
  authenticate,
};