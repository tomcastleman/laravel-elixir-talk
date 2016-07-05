var elixir = require('laravel-elixir');

// "npm run serve" fires up http-server on 127.0.0.1:10080
elixir.config.browserSync.proxy = '127.0.0.1:10080';

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {

  // copy fonts
  var fonts = [
    'node_modules/bootstrap-sass/assets/fonts',
    'node_modules/font-awesome/fonts'
  ];
  for(var f in fonts) {
    mix.copy(fonts[f], 'public/fonts');
    mix.copy(fonts[f], 'public/build/fonts');
  }

  mix.sass('app.scss');
  mix.webpack(['app.js']);
  //mix.version(['css/app.css', 'js/all.js']);

  //mix.browserSync();
});
