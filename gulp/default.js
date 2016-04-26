/*global require, module*/
(function () {

  'use strict';
  
  var gulp        = require('gulp');
  var $           = require('gulp-load-plugins')({ lazy: true });
  var runSequence = require('run-sequence');
  
  module.exports = function () {
    gulp.task('default', function (cb) {
      if ($.util.env.dist || $.util.env.travis) {
        runSequence(['build'], cb);
      } else {
        runSequence(['build'], 'serve', cb);
      }
    });
  };

})();
