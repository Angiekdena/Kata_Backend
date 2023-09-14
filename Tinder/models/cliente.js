const connection = require('../knexfile').development;
const database = require('knex')(connection);

const createClients = (cliente) => {
  return database('clients').insert(cliente).returning('id');
};

const getAll = () => {
  return database('clients');
};

const getById = (id) => {
  return database('clients')
    .where({ id })
    .first();
};

const updateTalent = (id, talento) => {
  return database('clients')
    .where('id', '=', id)
    .update(talento);
};

module.exports = {
  createClients,
  getAll,
  getById,
  updateTalent
};
