var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('default', function () {
    var target = gulp.src('./public/index.html');
    var sources = gulp.src(['./public/**/*.js', './public/**/*.css'], {read: false});

    return target
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./public'));
});