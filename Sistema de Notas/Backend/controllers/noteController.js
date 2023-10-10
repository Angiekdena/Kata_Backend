const noteModel = require('../models/note');
const { validateNotes, validatePartialNotes } = require('../shemas/validation');

const getById = (req, res) => {
  return noteModel.getById(req.userId)
    .then(results => res.status(200).json(results))
    .catch(error => res.status(500).json(error));
};

const insertNote = async (req, res) => {
  const result = validateNotes(req.body);
  if (!result.success) {
    return res.status(400).json({ success: false, message: JSON.parse(result.error.message) });
  }

  //const { id, title, description } = req.body;

  await noteModel.insertNote({ result.data })
    .then((response) => {
      res.status(201).send({ success: true, message: 'Nota agregada' });
    })
    .catch((error) => {
      res.status(401).send({ success: false, message: `Error, datos invalidos. ${error}` });
    });
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  await noteModel.updateNote(id, { title, description })
    .then((response) => {
      res.status(201).send({ success: true, message: 'Nota actualizada' });
    })
    .catch((error) => {
      res.status(401).send({ success: false, message: `Error, datos invalidos. ${error}` });
    });
};

const removeNote = async (req, res) => {
  const { id } = req.params;
  
  const result = validatePartialNotes(req.body);
  if (!result.success) {
    return res.status(400).json({ success: false, message: JSON.parse(result.error.message) });
  }

  await noteModel.removeNote(validatePartialNotes)
    .then((response) => {
      res.status(201).send({ success: true, message: 'Nota Eliminada' });
    })
    .catch((error) => {
      res.status(401).send({ success: false, message: `Error, datos invalidos. ${error}` });
    });
};

module.exports = {
  getById,
  insertNote,
  updateNote,
  removeNote
};
