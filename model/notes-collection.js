'use strict';

const Note = require('./notes-schema');

class Collection {

  async get() {
    return await Note.find({});
  }

  async create(text, category) {
    const newNoteToSave = new Note({text: text, category: category});
    return await newNoteToSave.save();
  }

  update() {
    // No updating in this app
  }

  async delete(id) {
    await Note.deleteOne({_id: id});

      // .then(() => {
      //   console.log(`Deleted Note ${id}`);
      // }).catch(() => console.log('Unable to delete'));
  }

  async clear() {
    await Note.deleteMany({});
  }

}

module.exports = Collection;