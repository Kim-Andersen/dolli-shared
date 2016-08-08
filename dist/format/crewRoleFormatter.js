'use strict';
'use strict;';

var crewRoleMap = require('../models/crewRoleMap');

module.exports = function (role) {
  return crewRoleMap[role] || role;
};