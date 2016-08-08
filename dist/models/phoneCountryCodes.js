'use strict';

var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

var regions = phoneUtil.getSupportedRegions();

var uniqueCountryCodes = [];
var countryCodes = [];
regions.forEach(function (region) {
  var code = phoneUtil.getCountryCodeForRegion(region);
  if (uniqueCountryCodes.indexOf(code) === -1) {
    countryCodes.push({
      code: code,
      region: region
    });
    uniqueCountryCodes.push(code);
  }
});

countryCodes.sort(function (a, b) {
  return parseInt(a.code, 10) > parseInt(b.code, 10) ? 1 : -1;
});

module.exports = countryCodes;