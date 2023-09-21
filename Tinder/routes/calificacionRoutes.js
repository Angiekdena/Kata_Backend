const express = require('express');
const calificacionRouter = express.Router();
const rantingController = require('../controllers/calificacionController');

calificacionRouter.post('/', rantingController.createRanting);

calificacionRouter.get('/', rantingController.getAll);

calificacionRouter.get('/:id', rantingController.getById);

module.exports = calificacionRouter;
