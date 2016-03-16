'use strict';

var LivingThing = require('./LivingThing.js');

module.exports = class Archaea extends LivingThing {
  constructor(name) {
    super (name,true,false,true,true,false);
  }
};