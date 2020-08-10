'use strict'

const minimist = require('minimist');

let entry = minimist(process.argv.slice(2));
delete entry._;

function Input() {
  this.action = this.isValid(entry) ? 'add' :
    'ERROR. Not a valid action, try -a or --add'
  this.payload = typeof entry[Object.keys(entry)[0]] === 'string' ?
    entry[Object.keys(entry)[0]] :
    'ERROR. Not a valid input. Please enter a message'
}

Input.prototype.isValid = function(entry) {
  let regex = /^a$|^add$/i;
  let valid = true;
  for(let key in entry) {
    valid = regex.test(key) ? valid : false;
  }
  return valid;
}

module.exports = Input;