'use strict';

require('supergoose');

const Notes = require('../lib/notes.js');
const Note = require('../lib/notes-schema');

const notes = new Notes();
jest.spyOn(notes, 'add');

describe('Note Module', () => {
  it('execute() does nothing with invalid options', () => {
    notes.execute({})
      .then(() => {
        expect(notes.add).not.toHaveBeenCalled();
      });
  });

  it('notes() can add a note', () => {
    const action = 'add';
    const payload = 'test note';
    notes.execute({ action: action, payload: payload })
      .then(() => {
        expect(notes.add).toHaveBeenCalled();
      });
  });

  it('can add a note to the database and return an id', () => {
    const action = 'add';
    const payload = 'test note';
    notes.execute({ action: action, payload: payload })
      .then(obj => {
        console.log(obj);
        expect(obj._id).toBeTruthy();
        Note.findById(obj._id)
          .then(testNote => {
            expect(testNote.text).toBe('test note');
          });
      });
  });

  it('can delete a note from the database', () => {
    const action = 'add';
    const payload = 'test delete';
    notes.execute({ action: action, payload: payload })
      .then(obj => {
        Note.findById(obj.id)
          .then(testNote => {
            console.log('test note', testNote);
            expect(testNote.text).toBe('test delete');
          })
          .then(objToDelete => {
            notes.execute({
              action: 'delete', payload: objToDelete.id,
            })
              .then(() => {
                Note.exists({_id: obj._id})
                  .then(bool => {
                    expect(bool).toBe(false);
                  });
              });
          });
      });
  });
});
