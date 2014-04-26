({
  mainConfigFile: './require.config.js'
  , baseUrl: './'
  , name: 'collection-manager'
  , stubModules: ['text', 'json']
  , include: ['almond']
  , namespace: 'LFCM'
  , out: 'dist/main.js'
  , inlineText: true
  , optimize: 'none'
  , cjsTranslate: true
  , paths: {
    'collection-manager': 'src/js/main'
    , almond: '../bower_components/almond/almond'
  }
  , wrap: {
    startFile: './wrap-start.frag',
    endFile: './wrap-end.frag'
  }
})