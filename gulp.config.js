/*global require, module*/

(function () {
  'use strict';

  module.exports = function () {
    return {
      src: {
        root: './src',
        styles: {
          root: './src/styles',
          bootstrapOverrides: './src/styles/bootstrap_overrides',
          elements: './src/styles/elements',
          govUkOverrides: './src/styles/govuk_overrides'
        }
      },
      dev: {
        root: './dev',
        styles: {
          root: './dev/styles',
          bootstrap: './dev/styles/bootstrap',
          bootstrapOverrides: './dev/styles/bootstrap_overrides',
          elements: './dev/styles/elements',
          govUkElements: './dev/styles/govuk_elements',
          govUkFrontendToolkit: './dev/styles/govuk_frontend_toolkit',
          govUkOverrides: './dev/styles/govuk_overrides',
          govUkTemplate: './dev/styles/govuk_template'
        },
        assets: {
          root: './dev/assets',
          externalLinks: './dev/assets/external-links',
          images: './dev/assets/images'
        }
      },
      docs: {
        root: './docs',
        src: {
          root: './docs/src',
          views: {
            root: './docs/src/views',
            pages: './docs/src/views/pages',
            partials: './docs/src/views/partials',
            handlebarsTemplate: './docs/src/views/template.hbs'
          }
        },
        app: {
          root: './docs/app',
          assets: './docs/app/assets',
          pageObject: {
            index : {
              title : 'Introduction',
              href : 'index.html'
            },
            css : {
              title : 'CSS',
              href : 'css.html'
            },
            elements : {
              title : 'Elements',
              href : 'elements.html'
            }
          }
        }
      },
      nodeModules: {
        styles: {
          bootstrap: './node_modules/bootstrap-sass/assets/stylesheets',
          govUkFrontendToolkit: './node_modules/govuk_frontend_toolkit/stylesheets',
          govUkElements: './node_modules/govuk-elements-sass/public/sass',
          govUkTemplate: './node_modules/govuk_template_ejs/assets/stylesheets'
        },
        assets: {
          govUkTemplateAssetImages: './node_modules/govuk_template_ejs/assets/images',
          govUkTemplateStylesheetImages: './node_modules/govuk_template_ejs/assets/stylesheets/images',
          govUkTemplateStylesheetExternalLinks: './node_modules/govuk_template_ejs/assets/stylesheets/external-links'
        },
        template: './node_modules/govuk_template_ejs/views/layouts'

      },
      dist: {
        root: './dist'
      }
    };
  }
})();
