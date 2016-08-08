'use strict';
'use strict;';

var transportTypeFormatter = function transportTypeFormatter(type) {
  switch (type) {
    default:
      return type;
    case 'PICK_UP':
      return 'Pick-up';
    case 'OWN_CAR':
      return 'Own car';
    case 'CAMERA_CAR':
      return 'Camera car';
    case 'LIGHT_TRUCK':
      return 'Light truck';
    case 'SOUND_CAR':
      return 'Sound car';
    case 'PROPS_CAR':
      return 'Props car';
    case 'PRODUCTION_CAR':
      return 'Production car';
  }
};

module.exports = transportTypeFormatter;