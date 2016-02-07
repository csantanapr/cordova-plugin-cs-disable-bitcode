#!/usr/bin/env node

/*
* Remove bitcode build property for ios9 projects.
*/

var buildProperty = require('./build-property');
module.exports = function hook(context) {
  buildProperty.removeBuildProperty(context, 'ENABLE_BITCODE');
};