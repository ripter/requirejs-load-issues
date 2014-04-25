({
  mainConfigFile: './require.config.js'
  , baseUrl: './'
  , name: 'collection-manager'
  , out: 'dist/main.js'
  , inlineText: true
  , optimize: 'none'
  , cjsTranslate: true
  , paths: {
    'collection-manager': 'src/js/main'
  }
})