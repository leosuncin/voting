/**
 * Plugin for dynamic generation of angular constant modules.
 *
 * ---------------------------------------------------------------
 * This creates an Angular Module that can be injected via ENV
 * Add any desired constants to the ENV objects below.
 *
 * For usage docs see:
 *    https://github.com/werk85/grunt-ng-constant
 */

module.exports = function(grunt) {

  grunt.config.set('ngconstant', {
    options: {
        wrap: '\'use strict\';\n\n {%= __ngModule %}',
        name: 'voteApp.config',
        dest: 'assets/js/dependencies/constants.js'
      },
      development: {
        constants: {
          ENV: {
            baseUrl: 'http://localhost:1337',
            enviroment: 'development'
          }
        }
      },
      production: {
        constants: {
          ENV: {
            baseUrl: 'https://voteappp.heroku.com',
            enviroment: 'production'
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-ng-constant');
};
