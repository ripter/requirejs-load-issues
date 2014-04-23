/*global require module */
'use strict';

var $ = require('jquery');

module.exports = function() {
  console.log('moduleB exported function');

  $('body').append('<h1>Module B using jquery</h1>');
};