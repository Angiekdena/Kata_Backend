const abilityModels = require('../models/habilidad');

const createAbility = (req, res) => {
  const { name, talentoId } = req.body;

  if (talentoId !== '') {
    abilityModels.createAbility({ name, talento_id: talentoId })
      .then(results => res.status(201).json(results))
      .catch(error => res.status(500).json(error));
  } else {
    res.status(400).send({ message: 'Habilidad invalido' });
  }
};

const getAll = (req, res) => {
  abilityModels.getAll()
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const getById = (req, res) => {
  const { id } = req.params;

  abilityModels.getById(id)
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const deleteAbility = (req, res) => {
  const { id } = req.params;

  abilityModels.deleteAbility(id)
    .then(results => res.status(201).json({
      message: 'Habilidad eliminada exitosamente'
    }))
    .catch(error => res.status(500).json(error));
};

module.exports = {
  createAbility,
  getAll,
  getById,
  deleteAbility
};
