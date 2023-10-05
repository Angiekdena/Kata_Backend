const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

function auth (req, res, next) {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).send({ message: 'Token no proporcionado' });
  }

  const accessToken = token.split(' ')[1];
  jwt.verify(accessToken, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Token inválido' + err });
    }

    req.userId = decoded.id;
    next();
  });
}

module.exports = auth;
