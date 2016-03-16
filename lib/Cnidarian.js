'use strict';

var Animal = require('./Animal.js');

module.exports = class Cnidarian extends Animal {
  constructor(name){
    super(name, 'radial');
  }

};