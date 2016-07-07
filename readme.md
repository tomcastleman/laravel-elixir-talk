# Laravel Elixir for any project

- London VueJS Meetup, Thursday 7th July 2016

## Abstract

_Not a webpack ninja?_ [Laravel Elixir](https://github.com/laravel/elixir)
makes a great front-end build system which just works out the box with little
or no configuration.

We will start with basic introductions and in this very simple demo project,
a firewall editor app, move on to cover a range of features including Vue
template compilation, asset combination & versioning, and browser sync to give
you ideas for how to structure your Vue projects and workflow.

_Not ready for vuex?_ Regardless of your backend stack we'll take look at a few
simple techniques for reading and writing data to / from your Vue components.

To follow along, or try it out later follow the instructions below.

## Install Demo App

### Node Environment

We need node installed. I am working with the following versions:

```
➜  ~ node -v
v5.3.0
➜  ~ npm -v
3.7.1
```

I haven't tested with the latest node release, but if you have any issues you can
get the version above from [this link](https://nodejs.org/dist/v5.3.0/).

### Install steps

To get started, simply:

1. `git clone https://github.com/tomcastleman/laravel-elixir-talk.git`
2. `cd laravel-elixir-talk`
3. `npm install`
4. `npm run serve`
5. In a new terminal: `npm run dev`
6. For static app go to [http://127.0.0.1:10080](http://127.0.0.1:10080)

## Documentation

Laravel Elixir v6 is due out at the end of July 2016. The latest
documentation can be found [here](https://laravel.com/docs/master/elixir).

If you are interested in the technologies under the hood, particularly if
you want to customise any default behaviour, you may find these links useful:

- [laravel elixir config](https://github.com/laravel/elixir/blob/master/src/Config.js)
- [webpack](http://webpack.github.io/docs/)
    - [vue-loader](http://vue-loader.vuejs.org/en/index.html)
    - [buble](https://buble.surge.sh/guide/)
- [browserify](http://browserify.org/)
    - [vueify](https://github.com/vuejs/vueify)
    - [babel](https://babeljs.io/)
- [rollup](http://rollupjs.org/)
- [Browsersync](https://www.browsersync.io/docs)

## Support and Feedback

Please do also give me feedback on joind in:

[https://joind.in/talk/32dc8](https://joind.in/talk/32dc8)

Feel free to send any questions by email:

`tom at b3it.co`

Thanks

