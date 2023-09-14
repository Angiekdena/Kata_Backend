const express = require('express');
const clienteRouter = express.Router();
const clientsController = require('../controllers/clienteController');

clienteRouter.post('/', clientsController.createClients);

clienteRouter.get('/', clientsController.getAll);

clienteRouter.get('/:id', clientsController.getById);

clienteRouter.patch('/:id', clientsController.updateClients);

module.exports = clienteRouter;
