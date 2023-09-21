const connection = require('../knexfile').development;
const database = require('knex')(connection);

const createAbility = (habilidad) => {
  return database('ability').insert(habilidad).returning('id');
};

const getAll = () => {
  return database('ability');
};

const getById = (id) => {
  return database('ability')
    .where({ id })
    .first();
};

const deleteAbility = (idHabilidad) => {
  return database('ability')
    .where('id', '=', idHabilidad)
    .del();
};

module.exports = {
  createAbility,
  getAll,
  getById,
  deleteAbility
};
