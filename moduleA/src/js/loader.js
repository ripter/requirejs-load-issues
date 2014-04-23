/*global require */

require.config({
  baseUrl: '/'
  , paths: {
    'jquery': 'bower_components/jquery/dist/jquery'
  }
});

require([
  'moduleA/src/js/main'
  // Doesn't work
  , 'moduleB/dist/bundle'
  // works
  //, 'moduleB/src/js/main'
], function(
  ModuleA
  , ModuleB
) {

  ModuleA();
  ModuleB();
});