'use strict';

const omit = require('lodash.omit');
const defaultConfig = require('../config');

module.exports = function omitConfig(omitPaths) {
  defaultConfig=omit(defaultConfig, omitPaths);
};