"use strict";

global.$ = {
    path: {
        task: require('./gulp/path/tasks.js')
    },
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    del: require('del')
};

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel(
        /*'pug',*/
        'fonts',
        'styles:dev',
        'img:dev',
        'libsJS:dev',
        'js:dev',
        'svg',
        'html'
    )
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        /*'pug',*/
        'fonts',
        'styles:build-min',
        'img:dev',
        // 'img:build'
        'libsJS:build',
        'js:dev',
        // 'js:build-min'
        // 'svg',
        'html'
    )
));
$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));