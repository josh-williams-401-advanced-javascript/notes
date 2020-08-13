'use strict';

const minimist = require('minimist');

class Input {

  constructor() {
    this.command = this.parse(minimist(process.argv.slice(2)));
  }

  parse(entry) {
    const returnObj = {};
    let regex = /^a$|^add$|^l$|^list$|^d$|^delete$/i;
    let command = Object.keys(entry).find(key => regex.test(key));
    if (command) {
      switch (command[0]) {
      case 'a':
        returnObj.action = 'add';
        break;
      case 'l':
        returnObj.action = 'list';
        break;
      case 'd':
        returnObj.action = 'delete';
        break;
      }
    }
    if(returnObj.action) { returnObj.payload = entry[command]; }
    if(entry[command] === true) { returnObj.payload = undefined; }
    
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