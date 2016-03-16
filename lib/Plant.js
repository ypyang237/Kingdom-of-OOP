'use strict';

var Eukaryota = require('./Eukaryota.js');

module.exports = class Plant extends Eukaryota {
  constructor(name){
    super(name, false, true, false, false);
  }

};