const rantingModels = require('../models/calificacion');

const createRanting = (req, res) => {
  const { calificacion, observacion, servicioId } = req.body;

  if (servicioId !== '' && calificacion !== '') {
    rantingModels.createRanting({ calificacion, observacion, servicio_id: servicioId })
      .then(results => res.status(201).json(results))
      .catch(error => res.status(500).json(error));
  } else {
    res.status(400).send({ message: 'Calificacion invalida' });
  }
};

const getAll = (req, res) => {
  rantingModels.getAll()
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const getById = (req, res) => {
  const { id } = req.params;

  rantingModels.getById(id)
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

module.exports = {
  createRanting,
  getAll,
  getById
};
