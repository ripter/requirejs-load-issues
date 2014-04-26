({
  mainConfigFile: './require.config.js'
  , baseUrl: './'
  , name: 'studio'
  , out: 'dist/main.js'
  , optimize: 'none'
  , cjsTranslate: true
  , paths: {
    studio: 'src/js/main'
  }
})