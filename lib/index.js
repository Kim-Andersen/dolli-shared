// @flow

'use strict;'

Array.prototype.unique = function(){
   var u = {}, a = [];
   for(var i = 0, l = this.length; i < l; ++i){
      if(u.hasOwnProperty(this[i])) {
         continue;
      }
      a.push(this[i]);
      u[this[i]] = 1;
   }
   return a;
};

const format = require('./format');
const validate = require('./validate');
const models = require('./models');
const phoneCountryCodes = require('./phoneCountryCodes');

module.exports.format = format;
module.exports.validate = validate;
module.exports.models = models;
module.exports.phoneCountryCodes = phoneCountryCodes;
