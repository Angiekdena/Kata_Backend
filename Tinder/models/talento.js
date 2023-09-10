const connection = require('../knexfile').development;
const database = require('knex')(connection);

const createTalent = (talento) => {
  return database('talents').insert(talento);
};

const getAll = () => {
  return database('talents');
};

const getById = (id) => {

};

const updateTalent = (id, talento) => {

};

module.exports = {
  createTalent,
  getAll,
  getById,
  updateTalent
};
