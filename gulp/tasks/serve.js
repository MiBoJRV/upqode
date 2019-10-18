module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: './build/static/',
            index: 'index.html'
        });
    });
};