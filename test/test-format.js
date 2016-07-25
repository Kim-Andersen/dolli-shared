'use strict;'

var expect = require('chai').expect;
var format = require('../').format;

describe('format', function() {
  describe('#crewRole()', function() {

    it('should return undefined when no parameter', function() {
      expect(format.crewRole()).to.equal(undefined);
    });

    it('should return raw input for unknown type', function() {
      expect(format.crewRole('some value')).to.equal('some value');
    });

    it('should return expected format for type "PRODUCTION_MANAGER"', function() {
      expect(format.crewRole('PRODUCTION_MANAGER')).to.equal('Production Manager');
    });

  });

  describe('#transportType()', function() {

    it('should return undefined when no parameter', function() {
      expect(format.transportType()).to.equal(undefined);
    });

    it('should return raw input for unknown type', function() {
      expect(format.transportType('some value')).to.equal('some value');
    });

    it('should return expected format for type "PICK_UP"', function() {
      expect(format.transportType('PICK_UP')).to.equal('Pick-up');
    });

  });
});
