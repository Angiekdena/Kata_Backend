const talentoModels = require('./models/talento');

const createTalent = (req, res) => {
  console.log(req.body);
  res.status(201).json(req.body);
};

const getAll = (req, res) => {
  const talentos = talentoModels.getAll();
  res.send(talentos);
};

const getById = (req, res) => {
  res.send('Llego al Get de Talento por ID');
};

const updateTalent = (req, res) => {
  res.json(req.body);
};

module.exports = {
  createTalent,
  getAll,
  getById,
  updateTalent
};
