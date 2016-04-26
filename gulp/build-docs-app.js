'use strict';

var gulp      = require('gulp');
var hbsmaster = require('gulp-handlebars-master');
var rename    = require('gulp-rename');
var _         = require('underscore');

module.exports = function (config) {
  gulp.task('build-docs-app', ['move-dev-assets-to-docs-app', 'build-app-html']);

  gulp.task('move-dev-assets-to-docs-app', function () {
    return gulp.src([config.dev.assets.root + '/**/*'])
      .pipe(gulp.dest(config.docs.app.assets));
  });

  gulp.task('build-app-html', function() {

    var templateData = _.reduce(config.docs.app.pageObject, function (memo, val, key) {
      memo[key] = val;
      memo._structure.push(val);
      return memo;
    }, {
      _structure: [] //helper array containing page info - used to generate the header link list
    });

    var options = {
      batch : [config.docs.src.views.partials]
    };

    gulp.src(config.docs.src.views.pages + '/*.hbs')
      .pipe(hbsmaster(config.docs.src.views.handlebarsTemplate, templateData, options))
      .pipe(rename( function(path){
        path.extname = '.html';
      }))
      .pipe(gulp.dest(config.docs.app.root));
  });

};
