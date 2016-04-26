'use strict';

var gulp = require('gulp');

module.exports = function (config) {

  gulp.task('copy-to-dev', [
    'copy-dev-styles',
    'copy-external-styles',
    'copy-external-assets']);

  gulp.task('copy-dev-styles', [
    'copy-bootstrap-override-styles',
    'copy-govuk-override-styles',
    'copy-element-styles',
    'copy-main-sass']);

  gulp.task('copy-bootstrap-override-styles', function () {
    return gulp.src(config.src.styles.bootstrapOverrides + '/**/*.scss')
      .pipe(gulp.dest(config.dev.sass.bootstrapOverrides));
  });

  gulp.task('copy-govuk-override-styles', function () {
    return gulp.src(config.src.styles.govUkOverrides + '/**/*.scss')
      .pipe(gulp.dest(config.dev.sass.govUkOverrides));
  });

  gulp.task('copy-element-styles', function () {
    return gulp.src(config.src.styles.elements + '/**/*.scss')
      .pipe(gulp.dest(config.dev.sass.elements));
  });

  gulp.task('copy-main-sass', function () {
    return gulp.src(config.src.styles.root + '/*.scss')
      .pipe(gulp.dest(config.dev.sass.root));
  });

  gulp.task('copy-external-styles', [
    'copy-govuk-template-styles',
    'copy-govuk-frontend-toolkit-styles',
    'copy-govuk-elements-styles',
    'copy-bootstrap-styles']);

  gulp.task('copy-govuk-template-styles', function () {
    return gulp.src(config.nodeModules.styles.govUkTemplate + '/**/*.css')
      .pipe(gulp.dest(config.dev.sass.govUkTemplate));
  });

  gulp.task('copy-govuk-frontend-toolkit-styles', function () {
    return gulp.src(config.nodeModules.styles.govUkFrontendToolkit + '/**')
      .pipe(gulp.dest(config.dev.sass.govUkFrontendToolkit));
  });

  gulp.task('copy-govuk-elements-styles', function () {
    return gulp.src(config.nodeModules.styles.govUkElements + '/**')
      .pipe(gulp.dest(config.dev.sass.govUkElements));
  });

  gulp.task('copy-bootstrap-styles', function () {
    return gulp.src(config.nodeModules.styles.bootstrap + '/**')
      .pipe(gulp.dest(config.dev.sass.bootstrap));
  });

  gulp.task('copy-external-assets', [
    'copy-asset-images',
    'copy-stylesheet-images',
    'copy-external-links']);

  gulp.task('copy-asset-images', function () {
    return gulp.src(config.nodeModules.assets.govUkTemplateAssetImages + '/**')
      .pipe(gulp.dest(config.dev.assets.images));
  });

  gulp.task('copy-stylesheet-images', function () {
    return gulp.src(config.nodeModules.assets.govUkTemplateStylesheetImages + '/**')
      .pipe(gulp.dest(config.dev.assets.images));
  });

  gulp.task('copy-external-links', function () {
    return gulp.src(config.nodeModules.assets.govUkTemplateStylesheetExternalLinks + '/**')
      .pipe(gulp.dest(config.dev.assets.externalLinks));
  });

};
