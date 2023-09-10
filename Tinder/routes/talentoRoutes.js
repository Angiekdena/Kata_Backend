const express = require('express');
const talentoRouter = express.Router();
const talentController = require('../controllers/talentoController');

talentoRouter.post('/', talentController.createTalent);

talentoRouter.get('/', talentController.getAll);

talentoRouter.get('/:id', talentController.getById);

talentoRouter.patch('/:id', talentController.updateTalent);

module.exports = talentoRouter;
