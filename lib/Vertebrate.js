'use strict';

var Bilateral = require('./Bilateral.js');

module.exports = class Vetebrate extends Bilateral {
  constructor(name){
    super(name, 'vertebral-column');
  }

};