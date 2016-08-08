var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
console.log('phoneUtil', phoneUtil);

const regions = phoneUtil.getSupportedRegions();

regions.forEach(region => {
  console.log(phoneUtil.regionToMetadataMap[region]);
});

// console.log('numbers', numbers);

const COUNTRY_CODES = [
  { code: 44, name: 'Great Britain' },
  { code: 45, name: 'Denmark' }
];

module.exports = COUNTRY_CODES;
