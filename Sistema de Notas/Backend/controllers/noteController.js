const noteModel = require('../models/note');

const getById = (req, res) => {
  const { id } = req.params;

  return noteModel.getById(id)
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const insertNote = async (req, res) => {
  const { id, title, description } = req.body;

  await noteModel.insertNote({ userid: id, title, description })
    .then((response) => {
      res.status(201).send({ message: 'Nota agregada' });
    })
    .catch((error) => {
      res.status(401).send({ message: `Error, datos invalidos. ${error}` });
    });
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  await noteModel.updateNote(id, { title, description })
    .then((response) => {
      res.status(201).send({ message: 'Nota actualizada' });
    })
    .catch((error) => {
      res.status(401).send({ message: `Error, datos invalidos. ${error}` });
    });
};

const removeNote = async (req, res) => {
  const { id } = req.params;

  await noteModel.removeNote(id)
    .then((response) => {
      res.status(201).send({ message: 'Nota Eliminada' });
    })
    .catch((error) => {
      res.status(401).send({ message: `Error, datos invalidos. ${error}` });
    });
};

module.exports = {
  getById,
  insertNote,
  updateNote,
  removeNote
};
