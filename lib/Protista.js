'use strict';

var Eukaryota = require('./Eukaryota.js');

module.exports = class Protista extends Eukaryota {
  constructor(name, uniCellular, mobile, heterotroph){
    super(name, uniCellular, true, mobile, heterotroph);
  }

};