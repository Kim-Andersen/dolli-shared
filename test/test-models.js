var expect = require('chai').expect;
var models = require('../').models;

describe('models', function() {

  describe('#crewRoleTypes', function() {
    it('should return an array', function() {
      expect(models.crewRoleTypes).to.be.an.array;
    });
    it('should have at least 15 elements', function() {
      expect(models.crewRoleTypes.length).to.be.at.least(15);
    });
  });

  describe('#transportTypes', function() {
    it('should return an array', function() {
      expect(models.transportTypes).to.be.an.array;
    });
    it('should include expected members', function() {
      expect(models.transportTypes).to.include.members([
        'PICK_UP',
        'OWN_CAR',
        'CAMERA_CAR',
        'LIGHT_TRUCK',
        'SOUND_CAR',
        'PROPS_CAR',
        'PRODUCTION_CAR'
      ]);
    });
  });

  describe('#projectAccessRoles', function() {
    it('should return an array', function() {
      expect(models.projectAccessRoles).to.be.an.array;
    });
    it('should include expected members', function() {
      expect(models.projectAccessRoles).to.include.members(['ADMIN', 'MEMBER']);
    });
  });

  describe('#projectMemberTypes', function() {
    it('should return an array', function() {
      expect(models.projectMemberTypes).to.be.an.array;
    });
    it('should include expected members', function() {
      expect(models.projectMemberTypes).to.include.members(['CREW', 'CAST']);
    });
  });

});
