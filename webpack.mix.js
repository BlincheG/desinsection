let mix = require('laravel-mix');
mix.pug = require('laravel-mix-pug');

let stylus = {
    use: require('nib')()
};

mix.setPublicPath('dist');
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
    .copyDirectory('src/images', 'dist/images/')
    //.copyDirectory('src/fonts', 'dist/fonts/')
    .js('src/js/app.js', 'dist')
    .stylus('src/stylus/app.styl', 'dist', stylus)
    .pug('src/templates/*.pug', '../../dist')
    .version();
