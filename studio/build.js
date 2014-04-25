({
  mainConfigFile: './require.config.js'
  , baseUrl: './'
  , name: 'studio'
  , out: 'dist/main.js'
  , inlineText: true
  , optimize: 'none'
  , cjsTranslate: true
  , paths: {
    studio: 'src/js/main'
  }
})