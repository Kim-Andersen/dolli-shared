'use strict;'

var expect = require('chai').expect;
import { phoneCountryCodes } from '../lib';

describe('phoneCountryCodes', function() {

  it('should export an array', () => {
    expect(phoneCountryCodes).to.be.an.array;
  });

  it('should export at least 100 country codes', () => {
    expect(phoneCountryCodes).to.have.length.of.at.least(100);
  });

});
