#!/usr/bin/env node

/*
* Disable bitcode for ios9 projects.
*/

var buildProperty = require('./build-property');
module.exports = function hook(context) {
  buildProperty.addBuildProperty(context, 'ENABLE_BITCODE','NO' );
};