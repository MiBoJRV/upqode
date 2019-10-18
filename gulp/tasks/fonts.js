// module.exports = function () {
//     $.gulp.task('fonts', () => {
        
//         return $.gulp.src(['./dev/static/fonts/**/*.*',
//         				   './node_modules/@fortawesome/fontawesome-free/webfonts/**/*.*'])
//             .pipe($.gulp.dest('./build/static/fonts/'));
//     });
// };

// module.exports = function () {
//     $.gulp.task('fonts', () => {
        
//         return $.gulp.src(['./dev/static/fonts/**/*.*'])
//             .pipe($.gulp.dest('./build/static/fonts/'));
        
//     });
// };

module.exports = function () {
    $.gulp.task('fonts', () => {
        return $.gulp.src(['./dev/static/fonts/**/*.*'])
            .pipe($.gulp.dest('./build/static/fonts/'));
    });
    
};
