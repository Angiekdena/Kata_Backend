const userModel = require('../models/user');
const { validateUser, validatePartialUser } = require('../shemas/validation');

const getUser = (req, res) => {
  return userModel.getAll()
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const insertUser = async (req, res) => {
  const result = validateUser(req.body);
  if (!result.success) {
    return res.status(400).json({ success: false, message: JSON.parse(result.error.message) });
  }

  await userModel.insertUser(result.data)
    .then((response) => {
      res.status(201).send({ success: true, message: 'Usuario agregado' });
    })
    .catch((error) => {
      res.status(401).send({ success: false, message: `Error, datos invalidos. ${error}` });
    });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  await userModel.login({ email, password })
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((error) => {
      res.status(401).send({ success: false, message: `Error, datos invalidos. ${error}` });
    });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { password, name } = req.body;

  const result = validatePartialUser(req.body);
  if (!result.success) {
    return res.status(400).json({ success: false, message: JSON.parse(result.error.message) });
  }

  await userModel.updateUser(id, { password, name })
    .then((response) => {
      res.status(201).send({ success: true, message: 'Usuario actualizado' });
    })
    .catch((error) => {
      res.status(401).send({ success: false, message: `Error, datos invalidos. ${error}` });
    });
};

const removeUser = async (req, res) => {
  const { id } = req.params;

  await userModel.removeUser(id)
    .then((response) => {
      res.status(201).send({ success: true, message: 'Usuario Eliminada' });
    })
    .catch((error) => {
      res.status(401).send({ success: false, message: `Error, datos invalidos. ${error}` });
    });
};

module.exports = {
  getUser,
  insertUser,
  login,
  updateUser,
  removeUser
};
