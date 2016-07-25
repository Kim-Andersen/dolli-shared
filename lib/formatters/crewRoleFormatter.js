
const MAP = {
  'PRODUCTION_MANAGER' : 'Production Manager',
  'ASSISTANT_DIRECTOR': 'Assistant Director',
  'PRODUCTION_COORDINATOR': 'Production Coordinator',
  'TECH_LIGHT': 'Tech, Light',
  'TECH_CAMERA': 'Tech, Camera',
  'COSTUME': 'Costume',
  'MAKEUP': 'Makeup',
  'CAST': 'Cast',
  'EXTRA': 'Extra',
  'TECH_SOUND': 'Tech, Sound',
  'ART': 'Art',
  'LOCATION': 'Location',
  'PRODUCER': 'Producer',
  'LINE_PRODUCER': 'Line Producer',
  'RUNNER': 'Runner',
  'CASTER': 'Caster',
  'DIRECTION': 'Direction'
};

module.exports = function(role){
  return MAP[role] || role;
};

// Fallback function.
exports.fromEnum = (role) => {
  return MAP[role] || role;
};
