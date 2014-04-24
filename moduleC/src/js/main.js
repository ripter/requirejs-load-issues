/*global require module */
'use strict';

// none of these work
//var moduleA = require('moduleA');
//var moduleA = require('moduleA/dist/bundle');
// var moduleA = require('http://localhost:8081/moduleA/dist/bundle.js');
var moduleA = require('http://localhost:8082/dist/main.js');
module.exports = function() {
  console.log('moduleC exported function');
  new moduleA();
};
