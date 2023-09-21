const servicioModels = require('../models/servicio');

const createService = (req, res) => {
  const { duracionHoras, anticipo, diaHora, pagoTotal, lugarTrabajo, terminadoCliente, terminadoTalento, talentoId, clienteId } = req.body;

  if (talentoId !== '' && clienteId !== '' && anticipo !== '') {
    servicioModels.createService({ duracionHoras, anticipo, diaHora, pagoTotal, lugarTrabajo, terminadoCliente, terminadoTalento, talento_id: talentoId, cliente_id: clienteId })
      .then(results => res.status(201).json(results))
      .catch(error => res.status(500).json(error));
  } else {
    res.status(400).send({ message: 'Nombre invalido' });
  }
};

const getAll = (req, res) => {
  servicioModels.getAll()
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const getById = (req, res) => {
  const { id } = req.params;

  servicioModels.getById(id)
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const updateService = (req, res) => {
  const { id } = req.params;
  const { duracionHoras, diaHora, pagoTotal, lugarTrabajo, terminadoCliente, terminadoTalento, talentoId, clienteId } = req.body;

  servicioModels.updateService(id, { duracionHoras, diaHora, pagoTotal, lugarTrabajo, terminadoCliente, terminadoTalento, talento_id: talentoId, cliente_id: clienteId })
    .then(results => res.status(201).json({ message: 'Servicio actualizado exitosamente' }))
    .catch(error => res.status(500).json(error));
};

module.exports = {
  createService,
  getAll,
  getById,
  updateService
};
