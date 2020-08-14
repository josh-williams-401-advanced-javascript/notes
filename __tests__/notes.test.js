'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');
const Note = require('../model/notes-collection');

const notes = new Notes();
const note = new Note();

jest.spyOn(notes, 'add');
const consoleSpy = jest.spyOn(console, 'log');

beforeEach(note.clear);

describe('Note Module', () => {
  it('execute() does nothing with invalid options', () => {
    notes.execute({})
      .then(() => {
        expect(notes.add).not.toHaveBeenCalled();
      });
  });

  it('notes() can add a note', () => {
    const action = 'add';
    const payload = 'test add';
    notes.execute({ action: action, payload: payload })
      .then(() => {
        expect(notes.add).toHaveBeenCalled();
      });
  });

  it('can add a note to the database and list that note', async () => {
    const action = 'add';
    const payload = 'test added to db';
    await notes.execute({ action: action, payload: payload });
    await notes.execute({action: 'list'});
    expect(consoleSpy).toHaveBeenCalledWith('test added to db');
  });


  it('can delete a note from the database', async () => {
    const action = 'add';
    const payload = 'test delete';
    await notes.execute({ action: action, payload: payload });
    expect(consoleSpy).toHaveBeenCalledWith('note saved test delete');
    let arr = await notes.list();
    await notes.execute({action: 'delete', payload: arr._id});
    expect(consoleSpy).toHaveBeenCalledWith(`Deleted Note ${arr._id}`);
  });

  it('Will log an error if it gets a bad id to delete', async () => {
    const action = 'add';
    const payload = 'test bad id';
    await notes.execute({ action: action, payload: payload });
    expect(consoleSpy).toHaveBeenCalledWith('note saved test bad id');
    await notes.execute({action: 'delete', payload: '123nDi89'});
    expect(consoleSpy).toHaveBeenCalledWith(`Unable to delete`);
  });
});
