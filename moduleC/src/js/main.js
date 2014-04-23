/*global require module */
'use strict';

// none of these work
//var moduleA = require('moduleA');
//var moduleA = require('moduleA/dist/bundle');
var moduleA = require('//moduleA/dist/bundle.js');

module.exports = function() {
  console.log('moduleC exported function');
  moduleA();
};
