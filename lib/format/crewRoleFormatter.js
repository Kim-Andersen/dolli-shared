const crewRoleMap = require('../models/crewRoleMap');

module.exports = function(role){
  return crewRoleMap[role] || role;
};

// Fallback function.
exports.fromEnum = (role) => {
  return crewRoleMap[role] || role;
};
