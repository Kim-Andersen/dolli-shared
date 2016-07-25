var expect = require('chai').expect;
var validate = require('../').validate;

describe('validate', function() {
  describe('#isValidEmail()', function() {

    it('should return false when no parameter', function() {
      expect(validate.isValidEmail()).to.be.false;
    });

    it('should return false when invalid email', function() {
      expect(validate.isValidEmail('someinvalid@email')).to.be.false;
    });

    it('should return true when valid email', function() {
      expect(validate.isValidEmail('somevalid@email.com')).to.be.true;
    });

  });
});
