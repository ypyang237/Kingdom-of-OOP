'use strict';

var Animal = require('./Animal.js');

module.exports = class Bilateral extends Animal {
  constructor(name, body){
    super(name, 'bilateral');

    this._body = body;
  }
  get body() {
    return this._body;
  }

  set body(body) {
    this._body = body;
  }

};