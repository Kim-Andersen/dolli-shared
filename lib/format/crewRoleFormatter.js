'use strict;'

const crewRoleMap = require('../models/crewRoleMap');

module.exports = function(role){
  return crewRoleMap[role] || role;
};
