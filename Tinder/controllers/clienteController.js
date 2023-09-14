const clientsModels = require('../models/cliente');

const createClients = (req, res) => {
  const { name, email, phone, password, address } = req.body;

  if (email !== '' && password !== '') {
    clientsModels.createClients({ name, email, phone, password, address })
      .then(results => res.status(201).json(results))
      .catch(error => res.status(500).json(error));
  } else {
    res.status(400).send({ message: 'Nombre invalido' });
  }
};

const getAll = (req, res) => {
  clientsModels.getAll()
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const getById = (req, res) => {
  const { id } = req.params;

  clientsModels.getById(id)
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const updateClients = (req, res) => {
  const { id } = req.params;
  const { name, email, phone, password, address } = req.body;

  clientsModels.updateClients(id, { name, email, phone, password, address })
    .then(results => res.status(201).json({ message: 'Usuario actualizado exitosamente' }))
    .catch(error => res.status(500).json(error));
};

module.exports = {
  createClients,
  getAll,
  getById,
  updateClients
};
