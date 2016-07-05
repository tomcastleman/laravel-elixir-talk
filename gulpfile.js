var elixir = require('laravel-elixir');

// "npm run serve" fires up http-server on 127.0.0.1:8080
elixir.config.browserSync.proxy = '127.0.0.1:8080';

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
  mix.webpack('app.js')
    .browserSync();
});
