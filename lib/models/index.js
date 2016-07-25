
const crewRoleMap = require('./crewRoleMap');
// module.exports.crewRoleMap = crewRoleMap;
module.exports.crewRoleTypes = Object.keys(crewRoleMap);

const transportTypeMap = require('./transportTypeMap');
// module.exports.transportTypeMap = transportTypeMap;
module.exports.transportTypes = Object.keys(transportTypeMap);

const projectAccessRoleMap = require('./projectAccessRoleMap');
// module.exports.projectAccessRoleMap = projectAccessRoleMap;
module.exports.projectAccessRoles = Object.keys(projectAccessRoleMap);

const projectMemberTypeMap = require('./projectMemberTypeMap');
// module.exports.projectMemberTypeMap = projectMemberTypeMap;
module.exports.projectMemberTypes = Object.keys(projectMemberTypeMap);

// const ACCESS_ROLES = [
//   'ADMIN',
//   'MEMBER'
// ];

// const MEMBER_TYPES = [
//   'CREW',
//   'CAST'
// ];

// const CREW_ROLES = [
//   'PRODUCTION_MANAGER', // Produktionsleder
//   'ASSISTANT_DIRECTOR', // Indspilningsleder
//   'PRODUCTION_COORDINATOR', // Produktionskoordinator
//   'TECH_LIGHT',
//   'TECH_CAMERA',
//   'COSTUME',
//   'MAKEUP',
//   'TECH_SOUND',
//   'ART',
//   'LOCATION',
//   'PRODUCER',
//   'LINE_PRODUCER',
//   'RUNNER',
//   'CASTER',
//   'DIRECTION'
// ];

// const CREW_ROLE_MAP = {
//   'PRODUCTION_MANAGER' : 'Production Manager',
//   'ASSISTANT_DIRECTOR': 'Assistant Director',
//   'PRODUCTION_COORDINATOR': 'Production Coordinator',
//   'TECH_LIGHT': 'Tech, Light',
//   'TECH_CAMERA': 'Tech, Camera',
//   'COSTUME': 'Costume',
//   'MAKEUP': 'Makeup',
//   'TECH_SOUND': 'Tech, Sound',
//   'ART': 'Art',
//   'LOCATION': 'Location',
//   'PRODUCER': 'Producer',
//   'LINE_PRODUCER': 'Line Producer',
//   'RUNNER': 'Runner',
//   'CASTER': 'Caster',
//   'DIRECTION': 'Direction'
// };

// module.exports.ACCESS_ROLES = ACCESS_ROLES;
// module.exports.MEMBER_TYPES = MEMBER_TYPES;
// module.exports.CREW_ROLES = CREW_ROLES;
