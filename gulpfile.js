var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('zip', function () {
    return gulp.src('./unzipped/**')
        .pipe(zip('test.sketch'))
        .pipe(gulp.dest('./sketch'));
});