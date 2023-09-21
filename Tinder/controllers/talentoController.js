const talentoModels = require('../models/talento');

const createTalent = (req, res) => {
  const { name, email, phone, password, activo } = req.body;

  if (email !== '' && password !== '') {
    talentoModels.createTalent({ name, email, phone, password, activo })
      .then(results => res.status(201).json(results))
      .catch(error => res.status(500).json(error));
  } else {
    res.status(400).send({ message: 'Nombre invalido' });
  }
};

const getAll = (req, res) => {
  console.log('getall');
  talentoModels.getAll()
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const getById = (req, res) => {
  console.log('getById');
  const { id } = req.params;

  talentoModels.getById(id)
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const updateTalent = (req, res) => {
  const { id } = req.params;
  const { name, phone, password, activo } = req.body;

  talentoModels.updateTalent(id, { name, phone, password, activo })
    .then(results => res.status(201).json({ message: 'Usuario actualizado exitosamente' }))
    .catch(error => res.status(500).json(error));
};

const searchTalentosHabilidad = (req, res) => {
  const { h } = req.query;
  talentoModels.searchTalentosHabilidad(h)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

module.exports = {
  createTalent,
  getAll,
  getById,
  updateTalent,
  searchTalentosHabilidad
};
