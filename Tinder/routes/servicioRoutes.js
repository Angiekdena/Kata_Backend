const express = require('express');
const servicioRouter = express.Router();
const serviceController = require('../controllers/servicioController');

servicioRouter.post('/', serviceController.createService);

servicioRouter.get('/', serviceController.getAll);

servicioRouter.get('/:id', serviceController.getById);

servicioRouter.patch('/:id', serviceController.updateService);

module.exports = servicioRouter;
