var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var minifyCss = require('gulp-minify-css');
var templateCache = require('gulp-angular-templatecache');

gulp.task('js', function() {
  gulp.src(['src/**/module.js', 'src/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
})

gulp.task('css', function() {
  gulp.src(['assets/**/main.css', 'assets/**/*.css'])
    .pipe(minifyCss({
      compatibility: 'ie8'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
})

gulp.task('templates', function() {
  return gulp.src('src/**/*.template.html')
    .pipe(templateCache('templates.js', {
      module: 'app',
      root: 'src'
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', ['js', 'css', 'templates'], function() {
  gulp.watch('src/**/*.js', ['js'])
  gulp.watch('assets/**/*.css', ['css'])
  gulp.watch('src/**/*.template.html', ['templates'])
})
