var Elixir = require('laravel-elixir');
var del = require('del');

var Task = Elixir.Task;

Elixir.extend('delete', function (paths) {

  new Task('delete', function () {
      return del(paths);
    }, {src: paths, output: 'trash!'}
  ).recordStep('Deleting Paths');

});