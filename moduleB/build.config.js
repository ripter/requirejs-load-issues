({
  name: 'moduleB'
  , out: 'dist/bundle.js'
  , optimize: 'none'
  , include: ['almond']
  // wrap is required to load in require([])
  , paths: {
    almond: '../lib/almond/almond',
    'moduleB': 'src/js/main',
    // doesn't work either way
    // 'jquery': 'empty:'
    'jquery': '../bower_components/jquery/dist/jquery'
  },
  cjsTranslate: true,
  wrap: {
    startFile: 'wrap-start.frag',
    endFile: 'wrap-end.frag'
  }
})