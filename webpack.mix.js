const mix = require('laravel-mix');
const path = require('path');

mix.alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist/vue'), // or 'vendor/tightenco/ziggy/dist/vue' if you're using the Vue plugin
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [require('tailwindcss')
        //
    ])
    .vue({ runtimeOnly: true })
