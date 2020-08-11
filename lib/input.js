'use strict';

const minimist = require('minimist');

let entry = minimist(process.argv.slice(2));
delete entry._;

function Input() {
  // add will be stored in the object as 'a', will be changed to 'add' in notes.js
  this.action = this.isValid(entry) ? Object.keys(entry)[0][0] :
    'ERROR';
  this.payload = typeof entry[Object.keys(entry)[0]] === 'string' ?
    entry[Object.keys(entry)[0]] :
    'ERROR';
}

Input.prototype.isValid = function(entry) {
  let regex = /^a$|^add$/i;
  let valid = true;
  for(let key in entry) {
    valid = regex.test(key) ? valid : false;
  }
  return valid;
};

module.exports = Input;