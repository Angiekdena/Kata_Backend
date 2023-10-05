const express = require('express');
const noteRouter = express.Router();
const noteController = require('../controllers/noteController');

noteRouter.get('/:id/', noteController.getById);

noteRouter.post('/', noteController.insertNote);

noteRouter.patch('/:id/', noteController.updateNote);

noteRouter.delete('/:id/', noteController.removeNote);

module.exports = noteRouter;
