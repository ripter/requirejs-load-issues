({
  name: 'moduleC'
  , out: 'dist/bundle.js'
  , optimize: 'none'
  , include: ['almond']
  , paths: {
    almond: '../bower_components/almond/almond'
    , 'jquery': '../bower_components/jquery/dist/jquery'
    , 'moduleC': 'src/js/main'
    // This resource is on the CDN in QA/Prod
    , 'moduleA': 'empty:'
  },
  cjsTranslate: true,
  wrap: {
    startFile: 'wrap-start.frag',
    endFile: 'wrap-end.frag'
  }
})