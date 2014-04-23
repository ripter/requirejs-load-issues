({
  name: 'src/js/main'
  , out: 'dist/bundle.js'

  // wrap is required to load in require([])
  , wrap: {
    start: 'define(function(require, exports, module) {'
    , end: '});'
  }

  , paths: {
    // doesn't work either way
    'jquery': 'empty:'
    //'jquery': '../bower_components/jquery/dist/jquery'
  }
})