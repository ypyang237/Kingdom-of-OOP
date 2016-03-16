'use strict';

var Eukaryota = require('./Eukaryota.js');

module.exports = class Fungi extends Eukaryota {
  constructor(name){
    super(name, false, true, false, true);
  }


};