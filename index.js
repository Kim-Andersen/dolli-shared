// @flow

'use strict;'

var format = require('./lib/format');
var validate = require('./lib/validate');
var models = require('./lib/models');
import * as types  from './lib/TypeDefinitions';

module.exports.format = format;
module.exports.validate = validate;
module.exports.models = models;
// module.exports.TypeDefinitions = TypeDefinitions;

module.exports.types = types;

// export * from './lib/TypeDefinitions';

// const defaultExport = {...TypeDefinitions};
// module.exports = defaultExport;
