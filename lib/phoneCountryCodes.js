const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

const regions = phoneUtil.getSupportedRegions();
const countryCodes = regions.map(region => {
  return {
    code: phoneUtil.getCountryCodeForRegion(region),
    name: region
  };
});

countryCodes.unique().sort((a,b) => a.code > b.code ? 1 : 0);

module.exports = countryCodes;
