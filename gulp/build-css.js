'use strict';

var gulp   = require('gulp');
var $      = require('gulp-load-plugins')({ lazy: true });
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function (config) {

  gulp.task('build-css', function () {
    return gulp.src(config.dev.sass.root + '/*.scss')
      .pipe(sourcemaps.init())
      .pipe($.sass.sync({errLogToConsole: true}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dev.assets.root));
  });

};
