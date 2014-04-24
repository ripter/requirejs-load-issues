/*global require module */
'use strict';

// none of these work
//var moduleA = require('moduleA');
//var moduleA = require('moduleA/dist/bundle');
//var moduleA = require('http://localhost:8080/moduleA/dist/bundle.js');
var moduleA = require('http://livefyre-cdn.s3.amazonaws.com/libs/collection-manager/rc/main.js');

module.exports = function() {
  console.log('moduleC exported function');
  moduleA();
};
