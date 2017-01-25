var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  shell = require('gulp-shell');


gulp.task('scss', function() {
  gulp.src(['./src/styles/app.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass(
      {includePaths: ['./src/assets/bower_components']}
    ).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./tmp'));
});

gulp.task('scss:watch', ['scss'], function() {
    gulp.watch('./src/styles/*.scss', ['scss']);
});

gulp.task('serve', ['scss:watch'], shell.task('ng serve'));


