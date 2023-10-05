const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = {
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdate: {
    type: Date,
    required: true,
    default: new Date()
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }
};

const Note = mongoose.model('notes', noteSchema);

const getById = async (userId) => {
  const id = new mongoose.Types.ObjectId(userId);
  const result = await Note.find({ userid: id });
  return result;
};

const insertNote = async (note) => {
  return await Note.create(note);
};

const updateNote = async (id, newNote) => {
  const oldNote = await Note.findById(id);

  oldNote.title = newNote.title
    ? newNote.title
    : oldNote.title;

  oldNote.description = newNote.description
    ? newNote.description
    : oldNote.description;

  return await oldNote.save();
};

const removeNote = async (id) => {
  return await Note.deleteOne({ _id: id });
};

module.exports = {
  getById,
  insertNote,
  updateNote,
  removeNote
};
