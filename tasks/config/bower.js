/**
 * Install bower components.
 *
 * ---------------------------------------------------------------
 *
 * Installs bower components and copies the required files into the assets folder structure.
 *
 */

module.exports = function(grunt) {

  grunt.config.set('bower', {
    install: {
      options: {
        targetDir: 'assets/vendor',
        layout: 'byComponent',
        install: true,
        verbose: false,
        cleanTargetDir: true,
        cleanBowerDir: false,
        bowerOptions: {
          exportsOverride: {
            bootstrap: {
              css: 'dist/css/bootstrap.css',
              js: 'dist/js/bootstrap.js',
              font: 'dist/fonts/*.*'
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
};
