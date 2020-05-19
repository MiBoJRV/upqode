const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

module.exports = function () {
    $.gulp.task('html', () => {
        return $.gulp.src('./dev/html/**/*.*')
            .pipe($.gulp.dest('./build/static/'))
            .on('end', $.browserSync.reload);
    });
   // $.gulp.watch("build/static/*.html").on('change', $.browserSync.reload);

   gulp.task('minifyHtml:build', () => {
    return $.gulp.src('./dev/html/**/*.*')
      .pipe(htmlmin({ collapseWhitespace: true,  removeComments: true }))
      .pipe($.gulp.dest('./build/static/'));
  });
};

