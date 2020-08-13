'use strict';

jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
  return {
    a: 'This is a note',
  };
});

const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');

describe('Input Module', () => {

  it('parse() creates a good object', () => {
    let options = new Input();
    let command = options.parse({ a: 'test' });
    expect(command.action).toBe('add');
    expect(command.payload).toBe('test');
  });

  it('valid() respects a proper object', () => {
    let options = new Input();
    expect(options.valid()).toBeTruthy();
  });

  it('valid() rejects an invalid object', () => {
    let options = new Input();
    options.command = {}; // break it
    expect(options.valid()).toBeFalsy();
  });

});

describe('Notes Module', () => {
  it('A bad note is not logged', () => {
    const spy = jest.spyOn(console, 'log');
    new Notes({action: 'ERROR', payload: 'ERROR'});
    expect(spy).not.toHaveBeenCalled();
  });
  it('A good note is logged', () => {
    const spy = jest.spyOn(console, 'log');
    // let noteTest = new Notes
    new Notes().execute({action: 'add', payload: 'test'});
    expect(spy).toHaveBeenCalledWith('note saved test');
  });
});
