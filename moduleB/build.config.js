({
  name: 'moduleB'
  , out: 'dist/bundle.js'
  , optimize: 'none'
  , include: ['almond']
  , paths: {
    almond: '../bower_components/almond/almond',
    'moduleB': 'src/js/main',
    'jquery': '../bower_components/jquery/dist/jquery'
  },
  cjsTranslate: true,
  wrap: {
    startFile: 'wrap-start.frag',
    endFile: 'wrap-end.frag'
  }
})