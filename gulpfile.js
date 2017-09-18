var gulp = require('gulp');
var filters = require('gulp-filter')
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var runSequence = require('run-sequence');

// SASS
gulp.task('sass', function() {
  var filter = filters(['**/*', '!sass/**/_*.scss']);
  return gulp.src('_sass/**/*.scss') // Gets all files ending with .scss in scss and children dirs
    .pipe(filter)
    .pipe(sass({outputStyle: 'compressed'})) // Passes it through a gulp-sass
    .pipe(gulp.dest('css'));
})

// Watchers
gulp.task('watch', function() {
  gulp.watch('_sass/**/*.scss', ['sass']);
})

// Defualt task
gulp.task('default', function(callback) {
  runSequence(['sass', 'watch'],
    callback
  )
})