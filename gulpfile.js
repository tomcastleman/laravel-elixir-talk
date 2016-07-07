var elixir = require('laravel-elixir');

// Custom extensions
require('./elixir-extensions');

// Vue component webpack wrapper
require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 */

elixir(function (mix) {

  // Reset build files
  mix.delete([
    'public/js/*',
    'public/css/*',
    'public/fonts/*',
    'public/build/*',
  ]);

  mix.sass('app.scss');
  
  mix.webpack('app.js');

  // copy fonts
  var fonts = [
    'node_modules/bootstrap-sass/assets/fonts',
    'node_modules/font-awesome/fonts'
  ];
  for(var f in fonts) {
    mix.copy(fonts[f], 'public/fonts');
    mix.copy(fonts[f], 'public/build/fonts');
  }

});
