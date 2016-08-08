const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

const regions = phoneUtil.getSupportedRegions();
const countryCodes = regions.map(region => {
  return {
    code: phoneUtil.getCountryCodeForRegion(region),
    name: region
  };
});

module.exports = countryCodes;
