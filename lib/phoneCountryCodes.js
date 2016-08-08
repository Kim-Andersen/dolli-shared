const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

const regions = phoneUtil.getSupportedRegions();

const uniqueCountryCodes = [];
const countryCodes = [];
regions.forEach(region => {
  var code = phoneUtil.getCountryCodeForRegion(region);
  if(uniqueCountryCodes.indexOf(code) === -1){
    countryCodes.push({
      code,
      region
    });
    uniqueCountryCodes.push(code);
  }
});

countryCodes.sort((a,b) => parseInt(a.code, 10) > parseInt(b.code, 10) ? 1 : -1);

module.exports = countryCodes;
