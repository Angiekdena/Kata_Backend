const express = require('express');
const habilidadRouter = express.Router();
const abilityController = require('../controllers/habilidadController');

habilidadRouter.post('/', abilityController.createAbility);

habilidadRouter.get('/', abilityController.getAll);

habilidadRouter.get('/:id', abilityController.getById);

habilidadRouter.delete('/:id', abilityController.deleteAbility);

module.exports = habilidadRouter;
