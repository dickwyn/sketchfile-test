var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('zip', function() {
    return gulp.src('./unzipped/**')
        .pipe(zip('typ.sketch'))
        .pipe(gulp.dest('./sketch'));
});

gulp.task('default', gulp.parallel('zip'));