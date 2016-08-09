var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('scripts', function() {

    gulp.src('src/js/script.js')
        .pipe(browserify({
            //insertGlobals : true,
            //debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', ['scripts'], function () {
    gulp.watch('./src/js/**/*.js', ['scripts']);
});


gulp.task('default', ['scripts']);