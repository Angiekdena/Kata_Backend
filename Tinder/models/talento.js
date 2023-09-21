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

const searchTalentosHabilidad = (habilidad) => {
  // return database('talents')
  //   .where('name', '=', habilidad);
  return database.select('ability.name as habilidad', 'talents.id', 'talents.name', 'talents.email', 'talents.phone')
    .from('talents')
    .whereRaw('LOWER(ability.name) = LOWER(?)', [habilidad])
    .innerJoin('ability', 'talents.id', 'ability.talento_id');
};

module.exports = {
  createTalent,
  getAll,
  getById,
  updateTalent,
  searchTalentosHabilidad
};
