const connection = require('../knexfile').development;
const database = require('knex')(connection);

const createTalent = (talento) => {
  return database('talents').insert(talento).returning('id');
};

const getAll = () => {
  return database('talents');
};

const getById = (id) => {
  return database('talents')
    .where({ id })
    .first();
};

const updateTalent = (id, talento) => {
  return database('talents')
    .where('id', '=', id)
    .update(talento);
};

module.exports = {
  createTalent,
  getAll,
  getById,
  updateTalent
};
