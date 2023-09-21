const connection = require('../knexfile').development;
const database = require('knex')(connection);

const createService = (servicio) => {
  return database('service').insert(servicio).returning('id');
};

const getAll = () => {
  return database('service');
};

const getById = (id) => {
  return database('service')
    .where({ id })
    .first();
};

const updateService = (id, servicio) => {
  return database('service')
    .where('id', '=', id)
    .update(servicio);
};

module.exports = {
  createService,
  getAll,
  getById,
  updateService
};
