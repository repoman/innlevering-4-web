var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');

var watchPaths = ['./assets/stylesheets/*.scss'];

gulp.task('clean', function() {
  return del(['./public/*.css']);
});

gulp.task('sass', ['clean'], function() {
  return gulp.src('./assets/stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch(watchPaths, ['sass']);
});

gulp.task('default', ['sass']);
