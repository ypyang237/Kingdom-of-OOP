'use strict';

var LivingThing = require('./LivingThing.js');

module.exports = class Bacteria extends LivingThing {
  constructor(name) {
    super(name, true, false, false, true, false);
  }
};
