const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email
  };
  const secret = process.env.TOKEN_SECRET;
  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secret, options);
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

// Funcionalidad de Bcrypt para las contraseñas
function encryptPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      }
    });
  });
}

function comparePassword(password, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  notFound,
  errorHandler,
  generateAccessToken,
  authenticate,
  generateToken,
  comparePassword,
  encryptPassword
};