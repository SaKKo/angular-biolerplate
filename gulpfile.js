var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var minifyCss = require('gulp-minify-css');

gulp.task('js', function () {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
})

gulp.task('css', function () {
  gulp.src(['assets/**/main.css', 'assets/**/*.css'])
      .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
})

gulp.task('watch', ['js','css'], function () {
  gulp.watch('src/**/*.js', ['js'])
  gulp.watch('assets/**/*.css', ['css'])
})
