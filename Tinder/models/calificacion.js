const connection = require('../knexfile').development;
const database = require('knex')(connection);

const createRanting = (calificacion) => {
  console.log(calificacion);
  return database('rating').insert(calificacion).returning('id');
};

const getAll = () => {
  return database('rating');
};

const getById = (id) => {
  return database('rating')
    .where({ id })
    .first();
};

module.exports = {
  createRanting,
  getAll,
  getById
};
