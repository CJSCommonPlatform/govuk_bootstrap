'use strict';

var gulp   = require('gulp');
var $      = require('gulp-load-plugins')({ lazy: true });
var source = require('vinyl-source-stream');

module.exports = function (config) {

  gulp.task('build-css', function () {
    return gulp.src(config.dev.sass.root + '/*.scss')
      .pipe($.sass())
      .pipe(gulp.dest(config.dev.assets.root));
  });

};
