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
import Eukaryota from '../lib/Eukaryota';
import Fungi from '../lib/Fungi';
import Protista from '../lib/Protista';
import Plant from '../lib/Plant';
import Animal from '../lib/Animal';

import 'should';

describe('LivingThing', () => {
  
  let livingThing;

  beforeEach(() => {
    livingThing = new LivingThing('alien',false,true,false,true,true);
  });

  describe('constructor', () => {
    
    it('should have arguments (name, uniCellular, trueNucleus, anaerobic, asexual, mobile) that set respective private variables', () => {
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
      livingThing._uniCellular.should.be.false;
      livingThing.uniCellular.should.be.false;
      livingThing.uniCellular = true;
      livingThing._uniCellular.should.be.true;
      livingThing.uniCellular.should.be.true;
    });
    it('should have a method named `multiCellular` that returns a boolean value based on the private variable `_uniCellular`', () => {
      livingThing._uniCellular.should.be.false;
      livingThing.multiCellular.should.be.true;
      livingThing.multiCellular = false;
      livingThing._uniCellular.should.be.true;
      livingThing.multiCellular.should.be.false;
    });

    it('should have a method named `eukaryote` that returns a boolean value based on the private variable `_trueNucleus`', () => {
      livingThing._trueNucleus.should.be.true;
      livingThing.eukaryote.should.be.true;
      livingThing.eukaryote = false;
      livingThing._trueNucleus.should.be.false;
      livingThing.eukaryote.should.be.false;
    });
    it('should have a method named `prokaryote` that returns a boolean value based on the private variable `_trueNucleus`', () => {
      livingThing._trueNucleus.should.be.true;
      livingThing.prokaryote.should.be.false;
      livingThing.prokaryote = true;
      livingThing._trueNucleus.should.be.false;
      livingThing.prokaryote.should.be.true;
    });

    it('should have a method named `anaerobic` that returns a boolean value based on the private variable `_anaerobic`', () => {
      livingThing._anaerobic.should.be.false;
      livingThing.anaerobic.should.be.false;
      livingThing.anaerobic = true;
      livingThing._anaerobic.should.be.true;
      livingThing.anaerobic.should.be.true;
    });
    it('should have a method named `aerobic` that returns a boolean value based on the private variable `_anaerobic`', () => {
      livingThing._anaerobic.should.be.false;
      livingThing.aerobic.should.be.true;
      livingThing.aerobic = false;
      livingThing._anaerobic.should.be.true;
      livingThing.aerobic.should.be.false;
    });
    
    it('should have a method named `asexual` that returns a boolean value based on the private variable `_asexual`', () => {
      livingThing._asexual.should.be.true;
      livingThing.asexual.should.be.true;
      livingThing.asexual = false;
      livingThing._asexual.should.be.false;
      livingThing.asexual.should.be.false;
    });
    it('should have a method named `sexual` that returns a boolean value based on the private variable `_asexual`', () => {
      livingThing._asexual.should.be.true;
      livingThing.sexual.should.be.false;
      livingThing.sexual = true;
      livingThing._asexual.should.be.false;
      livingThing.sexual.should.be.true;
    });

    it('should have a method named `mobile` that returns a boolean value based on the private `_mobile`', () => {
      livingThing._mobile.should.be.true;
      livingThing.mobile.should.be.true;
      livingThing.mobile = false;
      livingThing._mobile.should.be.false;
      livingThing.mobile.should.be.false;
    });
    it('should have a method named `immobile` that returns a boolean value based on the private `_mobile`', () => {
      livingThing._mobile.should.be.true;
      livingThing.immobile.should.be.false;
      livingThing.immobile = true;
      livingThing._mobile.should.be.false;
      livingThing.immobile.should.be.true;
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
    
    it('should have arguments (name) that sets the private `_name` value', () => {
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
    
    it('should have arguments (name) that sets the private `_name` value', () => {
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

describe('Eukaryota', () => {
  
  let eukaryota;

  beforeEach(() => {
    eukaryota = new Eukaryota('Yeast', false, true, false, true);
  });

  it('should extend LivingThing', () => {
    (eukaryota instanceof LivingThing).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name, uniCellular, asexual, mobile, heterotroph) that set respective private variables', () => {
      eukaryota._name.should.be.equal('Yeast');
      eukaryota._uniCellular.should.be.false;
      eukaryota._asexual.should.be.true;
      eukaryota._mobile.should.be.false;
      eukaryota._heterotroph.should.be.true;
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      eukaryota._uniCellular.should.be.false;
      eukaryota._trueNucleus.should.be.true;
      eukaryota._anaerobic.should.be.false;
      eukaryota._asexual.should.be.true;
      eukaryota._mobile.should.be.false;
    });
    
  });

  describe('getters and setters', () => {
    it('should have a method named `heterotroph` that returns a boolean value based on the private variable `_heterotroph`', () => {
      eukaryota._heterotroph.should.be.true;
      eukaryota.heterotroph.should.be.true;
      eukaryota.heterotroph = false;
      eukaryota._heterotroph.should.be.false;
      eukaryota.heterotroph.should.be.false;
    });
    it('should have a method named `autotroph` that returns a boolean value based on the private variable `_heterotroph`', () => {
      eukaryota._heterotroph.should.be.true;
      eukaryota.autotroph.should.be.false;
      eukaryota.autotroph = true;
      eukaryota._heterotroph.should.be.false;
      eukaryota.autotroph.should.be.true;
    });
  });

});

describe('Fungi', () => {
  
  let fungus;

  beforeEach(() => {
    fungus = new Fungi('The Fungus among us');
  });

  it('should extend Eukaryota', () => {
    (fungus instanceof Eukaryota).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name) that set respective private variables', () => {
      fungus._name.should.be.equal('The Fungus among us');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      fungus._uniCellular.should.be.false;
      fungus._trueNucleus.should.be.true;
      fungus._anaerobic.should.be.false;
      fungus._asexual.should.be.true;
      fungus._mobile.should.be.false;
      fungus._heterotroph.should.be.true;
    });
    
  });
});

describe('Protista', () => {
  
  let amoeba;

  beforeEach(() => {
    amoeba = new Protista('Amoeba', false, true, true);
  });

  it('should extend Eukaryota', () => {
    (amoeba instanceof Eukaryota).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name, uniCellular, mobile, heterotroph) that set respective private variables', () => {
      amoeba._name.should.be.equal('Amoeba');
      amoeba._uniCellular.should.be.false;
      amoeba._mobile.should.be.true;
      amoeba._heterotroph.should.be.true;
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      amoeba._trueNucleus.should.be.true;
      amoeba._anaerobic.should.be.false;
      amoeba._asexual.should.be.true;
    });
    
  });
});

describe('Plant', () => {
  
  let grass;

  beforeEach(() => {
    grass = new Plant('Grass', false, true, true);
  });

  it('should extend Eukaryota', () => {
    (grass instanceof Eukaryota).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name) that set respective private variables', () => {
      grass._name.should.be.equal('Grass');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      grass._uniCellular.should.be.false;
      grass._trueNucleus.should.be.true;
      grass._anaerobic.should.be.false;
      grass._asexual.should.be.true;
      grass._mobile.should.be.false;
      grass._heterotroph.should.be.false;
    });
    
  });
});

describe('Animal', () => {
  
  let dog;

  beforeEach(() => {
    dog = new Animal('Dog', 'vertebral-column');
  });

  it('should extend Eukaryota', () => {
    (dog instanceof Eukaryota).should.be.true;
  });

  describe('constructor', () => {
    
    it('should have arguments (name, symmetry) that set respective private variables', () => {
      dog._name.should.be.equal('Dog');
      dog._symmetry.should.be.equal('vertebral-column');
    });

    it('should invoke super constructor with correct hardcoded arguments', () => {
      dog._uniCellular.should.be.false;
      dog._trueNucleus.should.be.true;
      dog._anaerobic.should.be.false;
      dog._asexual.should.be.false;
      dog._mobile.should.be.true;
      dog._heterotroph.should.be.true;
    });
    
  });

  describe('getters and setters', () => {
    it('should have a method named `symmetry` that returns a string value based on the private variable `_symmetry`', () => {
      dog._symmetry.should.be.equal('vertebral-column');
      dog.symmetry.should.be.equal('vertebral-column');
      dog.symmetry = 'exoskeleton';
      dog._symmetry.should.be.equal('exoskeleton');
      dog.symmetry.should.be.equal('exoskeleton');
    });
  });
});