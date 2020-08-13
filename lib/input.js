'use strict';

const minimist = require('minimist');

class Input {

  constructor() {
    this.command = this.parse(minimist(process.argv.slice(2)));
  }

  parse(entry) {
    const returnObj = {
      payload: undefined,
    };
    let regex = /^a$|^add$|^l$|^list$/i;
    let command = Object.keys(entry).find(key => regex.test(key));
    if (command) {
      switch (command[0]) {
      case 'a':
        returnObj.action = 'add';
        returnObj.payload = entry[command];
        break;
      case 'l':
        returnObj.action = 'list';
        delete returnObj.payload;
        break;
      }
    }
    // if(returnObj.action) {returnObj.payload = entry[command]; }
    let catRegex = /^c$|^category$/i;
    let categoryKey = Object.keys(entry).find(key => catRegex.test(key));
    if (categoryKey) {
      returnObj.category = entry[categoryKey];
    }
    return returnObj;
  }

  valid() {
    return !!(this.command.payload && this.command.action) || this.command.action === 'list';
  }
}

module.exports = Input;