'use strict';

const Note = require('./notes-schema');

class Notes {

  constructor (){
    // this.action = obj.action;
    // this.payload = obj.payload;
    // this.execute();
  }

  async execute(obj) {
    switch(obj.action) {
    case 'add':
      this.add(obj.payload, obj.category);
      break;
    case 'list':
      this.list(obj.category);
      break;
    }

  }

  async add(text, category) {
    console.log(`note saved ${text}`);
    new Note({text: text, category: category}).save();
  }
  async list(category) {
    console.log('');
    let noteList = await Note.find({});
    noteList = category ?
      noteList
        .filter(note => note.category === category)
      : noteList;
    noteList.forEach(note => {
      console.log(note.text);
      console.log(`Category: ${note.category}   ID: ${note._id}`);
      console.log('-----------------------------');
    });
  }
}

module.exports = Notes;