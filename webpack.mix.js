let mix = require('laravel-mix');
mix.pug = require('laravel-mix-blade-pug');

let stylus = {
    use: require('nib')()
};

mix.disableNotifications();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .pug(path.join('src', 'templates'), path.join('dist'))
    .js('src/js/app.js', 'dist/js/')
    .stylus('src/stylus/app.styl', 'dist/css/', stylus)
    .copyDirectory('src/images', 'dist/images/')
    .copyDirectory('src/fonts', 'dist/fonts/');
