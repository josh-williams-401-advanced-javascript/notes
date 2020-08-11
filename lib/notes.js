'use strict';

function Notes(obj) {
  this.action = obj.action;
  this.payload = obj.payload;
  this.execute();
}
Notes.prototype.execute = function() {
  if (this.action === 'add') {
    return this.add();
  }
};
Notes.prototype.add = function() {
  console.log(`Adding Note: ${this.payload}`);
  return {
    text: this.payload,
    id: '34SDFGOJ9871PD' };
};

module.exports = Notes;