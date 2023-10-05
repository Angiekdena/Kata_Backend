const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const auth = require('../auth');

userRouter.post('/', userController.insertUser);

userRouter.post('/login', userController.login);

userRouter.get('/', auth, userController.getUser);

userRouter.patch('/:id/', auth, userController.updateUser);

userRouter.delete('/:id/', auth, userController.removeUser);

module.exports = userRouter;
