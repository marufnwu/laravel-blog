const mix = require('laravel-mix');


mix.disableNotifications();


mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);


mix.styles([
    'public/css/grid.min.css',
    'public/css/main.css',
], 'public/css/all.css');