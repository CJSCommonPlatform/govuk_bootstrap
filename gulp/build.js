'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

module.exports = function () {
  gulp.task('build', ['clean'], function (cb) {
    runSequence(
      'copy-to-dev',
      'build-css',
      'build-docs-app',
      'copy-to-dist', cb);
  });
};
