'use strict'

module.exports = class LivingThing {



  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._multiCellular !== uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;

  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('this._name must be a string');
    }
    this._name = name;
   }

  get uniCellular() {
    return this._uniCellular;
  }

  set uniCellular(uniCellular) {

    this._uniCellular = uniCellular;
  }

  get multiCellular() {
    return !this._uniCellular;
  }

  set multiCellular(uniCellular) {

    this._uniCellular = !uniCellular ;
   }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(trueNucleus) {

    this._trueNucleus = trueNucleus;
  }

  get prokaryote() {
    return !this._trueNucleus;
  }

  set prokaryote(trueNucleus) {

    this._trueNucleus = !trueNucleus;
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(anaerobic) {

    this._anaerobic = anaerobic;
  }

  get aerobic() {
    return !this._anaerobic;
  }

  set aerobic(anaerobic) {

    this._anaerobic = !anaerobic;
  }

  get asexual() {
    return this._asexual;
  }

  set asexual(asexual) {

    this._asexual = asexual;
  }

  get sexual() {
    return !this._asexual;
  }

  set sexual(asexual) {

    this._asexual = !asexual;
  }

  get mobile() {
    return this._mobile;
  }

  set mobile(mobile) {

    this._mobile = mobile;
  }

  get immobile() {
    return !this._mobile;
  }

  set immobile(mobile) {

    this._mobile = !mobile;
  }
};