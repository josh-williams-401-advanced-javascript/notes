'use strict';

const Note = require('../model/notes-collection');
const noteAction = new Note();

class Notes {

  async execute(obj) {
    switch(obj.action) {
    case 'add':
      await this.add(obj.payload, obj.category);
      break;
    case 'list':
      await this.list(obj.payload);
      break;
    case 'delete':
      await this.delete(obj.payload);
      break;
    }
  }

  async add(text, category) {
    console.log(`note saved ${text}`);
    let addedNote = await noteAction.create(text, category);
    return addedNote;
  }

  async list(category) {
    console.log('');
    let noteList = await noteAction.get({});
    noteList = category ?
      noteList
        .filter(note => note.category === category)
      : noteList;
    noteList.forEach(note => {
      console.log(note.text);
      console.log(`Category: ${note.category}   ID: ${note._id}`);
      console.log('-------------------------------------------------------');
    });
    return noteList;
  }
  async delete(id) {
    try {
      await noteAction.delete(id);
      console.log(`Deleted Note ${id}`);
    } catch(e) {
      console.log('Unable to delete');
    }
  }
}

module.exports = Notes;