var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
 
gulp.task('sass', function () {
    return gulp.src('assets/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest(''))
        .pipe(livereload());
});
 
// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['assets/sass/**/*'], ['sass']);
});

gulp.task('default', ['watch', 'sass']);