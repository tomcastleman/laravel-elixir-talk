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

});
