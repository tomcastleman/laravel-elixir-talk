var elixir = require('laravel-elixir');

// "npm run serve" fires up http-server on 127.0.0.1:10080
elixir.config.browserSync.proxy = '127.0.0.1:10080';

// Vue component webpack wrapper
require('laravel-elixir-vue');

// Browserify and Vue component browserify wrapper
require('laravel-elixir-browserify-official');
require('laravel-elixir-vueify');


// Stylus plugin
require('laravel-elixir-stylus');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 */

elixir(function (mix) {

  // Javascript Compilation
  // ----------------------

  // source file(s) relative to 'resources/assets/js/'
  // output defaults to:
  // - 'public/js/app.js' if string source
  // - 'public/js/all.js' if array source
  mix.webpack('app.js', 'public/js/webpack/compiled.js');
  mix.browserify('app.js', 'public/js/browserify/compiled.js');
  mix.rollup('rollup/main.js', 'public/js/rollup/compiled.js');

  // source file(s) relative to 'resources/assets/js/'
  mix.scripts(['app.js']);
  mix.scriptsIn('blog');

  // Source file relative to 'resources/assets/coffee/'
  mix.coffee('app.coffee', 'public/js/coffee/compiled.js');


  // Style Compilation
  // -----------------

  // Source file relative to 'resources/assets/sass/'
  mix.sass('app.scss', 'public/css/sass/compiled.css');
  
  // Source file relative to 'resources/assets/less/'
  mix.less('app.less', 'public/css/less/compiled.css');

  // Source file relative to 'resources/assets/stylus/'
  mix.stylus('app.styl', 'public/css/styl/compiled.css');

  // Source file relative to 'resources/assets/css/'
  mix.styles([
    'normalize.css',
    'main.css'
  ]);


  // File Operations
  // ---------------
  
  //mix.combine()
  //mix.version(['css/app.css', 'js/all.js']);

  // copy fonts
  var fonts = [
    'node_modules/bootstrap-sass/assets/fonts',
    'node_modules/font-awesome/fonts'
  ];
  for(var f in fonts) {
    //mix.copy(fonts[f], 'public/fonts');
    //mix.copy(fonts[f], 'public/build/fonts');
  }
  
  // Testing
  // -------
  //mix.browserSync();
  //mix.tdd();
  //mix.phpUnit();
  //mix.phpSpec();
});
