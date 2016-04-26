'use strict';

var gulp = require('gulp');

module.exports = function (config) {
  
  gulp.task('copy-to-dist', ['copy-dev-to-dist'], function () {
  });

  gulp.task('copy-dev-to-dist', function () {
    return gulp.src([config.dev.root + '/**/*'])
      .pipe(gulp.dest(config.dist.root));
  });

};
