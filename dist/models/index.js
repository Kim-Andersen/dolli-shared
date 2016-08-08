'use strict';
'use strict;';

var crewRoleMap = require('./crewRoleMap');
module.exports.crewRoleTypes = Object.keys(crewRoleMap);

var transportTypeMap = require('./transportTypeMap');
module.exports.transportTypes = Object.keys(transportTypeMap);

var projectAccessRoleMap = require('./projectAccessRoleMap');
module.exports.projectAccessRoles = Object.keys(projectAccessRoleMap);

var projectMemberTypeMap = require('./projectMemberTypeMap');
module.exports.projectMemberTypes = Object.keys(projectMemberTypeMap);

module.exports.phoneCountryCodes = require('./phoneCountryCodes');