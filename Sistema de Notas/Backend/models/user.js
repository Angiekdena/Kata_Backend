const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY;

const userSchema = {
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  createdate: {
    type: Date,
    required: true,
    default: new Date()
  },
  note: [{
    type: Schema.Types.ObjectId,
    ref: 'notes'
  }]
};

const User = mongoose.model('users', userSchema);

const insertUser = async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
  return await User.create(user);
};

const login = async (user) => {
  const oldUser = await User.findOne({ email: user.email });
  console.log(oldUser);
  if (!oldUser || !await bcrypt.compare(user.password, oldUser.password)) {
    return 'Email o contraseña incorrectos';
  }
  const token = jwt.sign({ id: oldUser._id }, SECRET_KEY, { expiresIn: '1h' });
  return token;
};

const updateUser = async (id, newUser) => {
  const oldUser = await User.findById(id);

  oldUser.password = newUser.password
    ? await bcrypt.hash(newUser.password, 10)
    : oldUser.password;

  oldUser.name = newUser.name
    ? newUser.name
    : oldUser.name;

  return await oldUser.save();
};

const removeUser = async (id) => {
  return await User.deleteOne({ _id: id });
};

const getUser = async (id) => {
  return await User.findById(id);
};

module.exports = {
  insertUser,
  login,
  updateUser,
  removeUser,
  getUser
};
