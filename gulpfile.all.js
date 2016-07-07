var elixir = require('laravel-elixir');

// Custom extensions
require('./elixir-extensions');

// Vue component webpack wrapper
require('laravel-elixir-vue');

// Browserify and Vue component browserify wrapper
require('laravel-elixir-browserify-official');
require('laravel-elixir-vueify');

// Stylus plugin
require('laravel-elixir-stylus');

// BrowserSync config
// "npm run serve" fires up http-server on 127.0.0.1:10080
elixir.config.browserSync.proxy = '127.0.0.1:10080';


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 */

elixir(function (mix) {

  // Custom Extension: Delete Build Files
  // ------------------------------------
  mix.delete([
    'public/js/*',
    'public/css/*',
    'public/fonts/*',
    'public/build/*'
  ]);

  
  // Style Compilation
  // -----------------

  // Source file relative to 'resources/assets/sass/'
  // default output public/css/app.css
  mix.sass('app.scss');

  // Source file relative to 'resources/assets/less/'
  mix.less('app.less', 'public/css/less/compiled.css');

  // Source file relative to 'resources/assets/stylus/'
  mix.stylus('app.styl', 'public/css/styl/compiled.css');

  // Source file relative to 'resources/assets/css/'
  mix.styles([
    'normalize.css',
    'main.css'
  ]);
  
  
  // Javascript Compilation
  // ----------------------

  // source file(s) relative to 'resources/assets/js/'
  // output defaults to:
  // - 'public/js/app.js' if string source
  // - 'public/js/all.js' if array source
  mix.webpack('app.js');
  mix.browserify('app.js', 'public/js/browserify/compiled.js');
  mix.rollup('rollup/main.js', 'public/js/rollup/compiled.js');

  // Source file relative to 'resources/assets/coffee/'
  mix.coffee('app.coffee', 'public/js/coffee/compiled.js');

  // source file(s) relative to 'resources/assets/js/'
  mix.scripts(['app.js']);
  mix.scriptsIn('blog');


  // File Operations
  // ---------------

  // copy fonts
  var fonts = [
    'node_modules/bootstrap-sass/assets/fonts',
    'node_modules/font-awesome/fonts'
  ];
  for(var f in fonts) {
    mix.copy(fonts[f], 'public/fonts');
    mix.copy(fonts[f], 'public/build/fonts');
  }

  mix.combine();
  mix.version(['css/app.css', 'js/app.js']);


  // Testing
  // -------
  mix.browserSync();
  mix.tdd();
  mix.phpUnit();
  mix.phpSpec();
  
});
