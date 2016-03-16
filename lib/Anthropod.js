'use strict';

var Bilateral = require('./Bilateral.js');

module.exports = class Anthropod extends Bilateral {
  constructor(name){
    super(name, 'exoskeleton');
  }

};