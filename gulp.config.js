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
        sass: {
          root: './dev/sass',
          bootstrap: './dev/sass/bootstrap',
          bootstrapOverrides: './dev/sass/bootstrap_overrides',
          elements: './dev/sass/elements',
          govUkElements: './dev/sass/govuk_elements',
          govUkFrontendToolkit: './dev/sass/govuk_frontend_toolkit',
          govUkOverrides: './dev/sass/govuk_overrides',
          govUkTemplate: './dev/sass/govuk_template'
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
              title : 'GOV.UK Bootstrap',
              href : 'index.html'
            },
            layout : {
              title : 'Layout',
              href : 'layout.html'
            },
            content : {
              title : 'Content',
              href : 'content.html'
            },
            components : {
              title : 'Components',
              href : 'elements.html'
            },
            developer_guide : {
              title : 'Developer Guide',
              href : 'developer_guide.html'
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
          govUkTemplateStylesheetExternalLinks: './node_modules/govuk_template_ejs/assets/stylesheets/external-links',
          govUkFrontendToolkitImages: './node_modules/govuk_frontend_toolkit/images'
        },
        template: './node_modules/govuk_template_ejs/views/layouts'

      },
      dist: {
        root: './dist'
      }
    };
  }
})();
