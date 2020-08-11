'use strict';

const minimist = require('minimist');
let entry = minimist(process.argv.slice(2));
delete entry._;

class Input {

  constructor() {
    this.action = this.parse(entry).action;
    this.payload = this.parse(entry).payload;
  }

  parse(entry){
    const returnObj = { action: 'ERROR', payload: 'ERROR' };
    if (this.valid()) {
      returnObj.payload = Object.values(entry)[0];
      switch (Object.keys(entry)[0][0]) {
      case 'a':
        returnObj.action = 'add';
        break;
      }
    }
    return returnObj;
  }

  valid() {
    let regex = /^a$|^add$/i;
    let valid = true;
    if (Object.values(entry)[0] === true
    || Object.values(this).length > 2
    || !regex.test(Object.keys(entry)[0])) {
      valid = false;
    }
    return valid;
  }
}

module.exports = Input;