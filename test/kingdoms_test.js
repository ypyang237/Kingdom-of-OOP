/*
 * Kingdom of OOP
 * http://devleague.com
 *
 * Copyright (c) 2015 Dev League
 * Licensed under the MIT license.
 */

import LivingThing from '../lib/LivingThing';
import Archaea from '../lib/Archaea';
import Bacteria from '../lib/Bacteria';

import 'should';

describe('LivingThing', () => {
  
  let livingThing;

  beforeEach(() => {
    livingThing = new LivingThing('alien',false,true,false,true,true);
  });

  describe('constructor', () => {
    
    it('should have constructor arguments (name, uniCellular, trueNucleus, anaerobic, asexual, mobile) that set respective private variables', () => {
      livingThing._name.should.be.equal('alien');
      livingThing._uniCellular.should.be.false;
      livingThing._trueNucleus.should.be.true;
      livingThing._anaerobic.should.be.false;
      livingThing._asexual.should.be.true;
      livingThing._mobile.should.be.true;
    });
    
  });

  describe('getters and setters', () => {
    
    it('should have a method that returns the value of the private variable `_name`', () => {
      livingThing._name.should.be.equal('alien');
      livingThing.name.should.be.equal('alien');
      livingThing.name = 'alf';
      livingThing._name.should.be.equal('alf');
      livingThing.name.should.be.equal('alf');
    });

    it('should have a method named `uniCellular` that returns a boolean value based on the private variable `_uniCellular`', () => {
      livingThing._uniCellular.should.be.equal(false);
      livingThing.uniCellular.should.be.equal(false);
      livingThing.uniCellular = true;
      livingThing._uniCellular.should.be.equal(true);
      livingThing.uniCellular.should.be.equal(true);
    });
    it('should have a method named `multiCellular` that returns a boolean value based on the private variable `_uniCellular`', () => {
      livingThing._uniCellular.should.be.equal(false);
      livingThing.multiCellular.should.be.equal(true);
      livingThing.multiCellular = false;
      livingThing._uniCellular.should.be.equal(true);
      livingThing.multiCellular.should.be.equal(false);
    });

    it('should have a method named `eukaryote` that returns a boolean value based on the private variable `_trueNucleus`', () => {
      livingThing._trueNucleus.should.be.equal(true);
      livingThing.eukaryote.should.be.equal(true);
      livingThing.eukaryote = false;
      livingThing._trueNucleus.should.be.equal(false);
      livingThing.eukaryote.should.be.equal(false);
    });
    it('should have a method named `prokaryote` that returns a boolean value based on the private variable `_trueNucleus`', () => {
      livingThing._trueNucleus.should.be.equal(true);
      livingThing.prokaryote.should.be.equal(false);
      livingThing.prokaryote = true;
      livingThing._trueNucleus.should.be.equal(false);
      livingThing.prokaryote.should.be.equal(true);
    });

    it('should have a method named `anaerobic` that returns a boolean value based on the private variable `_anaerobic`', () => {
      livingThing._anaerobic.should.be.equal(false);
      livingThing.anaerobic.should.be.equal(false);
      livingThing.anaerobic = true;
      livingThing._anaerobic.should.be.equal(true);
      livingThing.anaerobic.should.be.equal(true);
    });
    it('should have a method named `aerobic` that returns a boolean value based on the private variable `_anaerobic`', () => {
      livingThing._anaerobic.should.be.equal(false);
      livingThing.aerobic.should.be.equal(true);
      livingThing.aerobic = false;
      livingThing._anaerobic.should.be.equal(true);
      livingThing.aerobic.should.be.equal(false);
    });
    
    it('should have a method named `asexual` that returns a boolean value based on the private variable `_asexual`', () => {
      livingThing._asexual.should.be.equal(true);
      livingThing.asexual.should.be.equal(true);
      livingThing.asexual = false;
      livingThing._asexual.should.be.equal(false);
      livingThing.asexual.should.be.equal(false);
    });
    it('should have a method named `sexual` that returns a boolean value based on the private variable `_asexual`', () => {
      livingThing._asexual.should.be.equal(true);
      livingThing.sexual.should.be.equal(false);
      livingThing.sexual = true;
      livingThing._asexual.should.be.equal(false);
      livingThing.sexual.should.be.equal(true);
    });

    it('should have a method named `mobile` that returns a boolean value based on the private `_mobile`', () => {
      livingThing._mobile.should.be.equal(true);
      livingThing.mobile.should.be.equal(true);
      livingThing.mobile = false;
      livingThing._mobile.should.be.equal(false);
      livingThing.mobile.should.be.equal(false);
    });
    it('should have a method named `immobile` that returns a boolean value based on the private `_mobile`', () => {
      livingThing._mobile.should.be.equal(true);
      livingThing.immobile.should.be.equal(false);
      livingThing.immobile = true;
      livingThing._mobile.should.be.equal(false);
      livingThing.immobile.should.be.equal(true);
    });
    
  });

});

describe('Archaea', () => {
  
  let archaea;

  beforeEach(() => {
    archaea = new Archaea('Acidilobus saccharovorans');
  });

  it('should extend LivingThing', () => {
    (archaea instanceof LivingThing).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have constructor arguments (name) that sets the private `_name` value', () => {
      archaea._name.should.be.equal('Acidilobus saccharovorans');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      archaea._uniCellular.should.be.true;
      archaea._trueNucleus.should.be.false;
      archaea._anaerobic.should.be.true;
      archaea._asexual.should.be.true;
      archaea._mobile.should.be.false;
    });
    
  });

});

describe('Bacteria', () => {
  
  let bacteria;

  beforeEach(() => {
    bacteria = new Bacteria('Clostridium');
  });

  it('should extend LivingThing', () => {
    (bacteria instanceof LivingThing).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have constructor arguments (name) that sets the private `_name` value', () => {
      bacteria._name.should.be.equal('Clostridium');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      bacteria._uniCellular.should.be.true;
      bacteria._trueNucleus.should.be.false;
      bacteria._anaerobic.should.be.false;
      bacteria._asexual.should.be.true;
      bacteria._mobile.should.be.false;
    });
    
  });

});
