module.exports = function () {
    $.gulp.task('html', () => {
        return $.gulp.src('./dev/html/**/*.*')
            .pipe($.gulp.dest('./build/static/'))
            .on('end', $.browserSync.reload);
    });
   // $.gulp.watch("build/static/*.html").on('change', $.browserSync.reload);
};

