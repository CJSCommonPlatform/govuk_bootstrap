'use strict';

var gulp = require('gulp');
var $    = require('gulp-load-plugins')({ lazy: true });

module.exports = function (config) {
  gulp.task('clean', ['clean-dev', 'clean-docs', 'clean-dist']);

  gulp.task('clean-dev', function () {
    return gulp.src(config.dev.root, {read: false})
      .pipe($.clean());
  });

  gulp.task('clean-docs', function () {
    return gulp.src(config.docs.app.root, {read: false})
      .pipe($.clean());
  });

  gulp.task('clean-dist', function () {
    return gulp.src(config.dist.root, {read: false})
      .pipe($.clean());
  });

};


