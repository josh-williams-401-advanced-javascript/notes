'use strict';

class Notes {

  constructor (obj){
    this.action = obj.action;
    this.payload = obj.payload;
    this.execute();
  }

  execute() {
    if (this.action === 'add') {
      return this.add();
    }
  }

  add() {
    console.log(`Adding Note: ${this.payload}`);
    return {
      text: this.payload,
      id: '34SDFGOJ9871PD' };
  }
}

module.exports = Notes;