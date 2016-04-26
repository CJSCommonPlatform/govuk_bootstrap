'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

// watch files for changes and invokes respective tasks
module.exports = function (config) {
  gulp.task('serve', function () {
    browserSync.init({
      server: './',
      startPath: config.docs.app.root
    });

    //src scss files
    gulp.watch([
      config.src.styles.root + '/*.scss',
      config.src.styles.bootstrapOverrides + '/**/*.scss',
      config.src.styles.elements + '/**/*.scss',
      config.src.styles.govUkOverrides + '/**/*.scss'], function () {
      runSequence('copy-to-css', 'build-css', 'build-docs-app', browserSync.reload);
    });

    //docs handlebards template and views
    gulp.watch([config.docs.src.root + '/**/*.hbs'], function () {
      runSequence('build-docs-app', browserSync.reload);
    });

  });
};
