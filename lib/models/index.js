'use strict;'

const crewRoleMap = require('./crewRoleMap');
module.exports.crewRoleTypes = Object.keys(crewRoleMap);

const transportTypeMap = require('./transportTypeMap');
module.exports.transportTypes = Object.keys(transportTypeMap);

const projectAccessRoleMap = require('./projectAccessRoleMap');
module.exports.projectAccessRoles = Object.keys(projectAccessRoleMap);

const projectMemberTypeMap = require('./projectMemberTypeMap');
module.exports.projectMemberTypes = Object.keys(projectMemberTypeMap);

module.exports.PHONE_COUNTRY_CODES = require('./phoneCountryCodes');
