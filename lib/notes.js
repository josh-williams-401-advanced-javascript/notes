'use strict';

const Note = require('./notes-schema');

class Notes {

  // constructor (){
  // this.action = obj.action;
  // this.payload = obj.payload;
  // this.execute();
  // }

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
    await new Note({text: text, category: category}).save();
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
      console.log('--------------------------------------------');
    });
  }
  async delete(id) {
    // console.log('in delete');
    await Note.deleteOne({_id: id}).then(obj => {
      console.log(`Deleted Note ${id}`);
    }).catch(() => console.log('Unable to delete'));
  }
}

module.exports = Notes;