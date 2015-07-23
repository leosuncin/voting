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
    dev: {
      dest: 'assets/vendor',
      options: {
        expand: true,
        keepExpandedHierarchy: true,
        packageSpecific: {
          bootstrap: {
            files: [
              'dist/css/bootstrap.css',
              'dist/css/bootstrap-theme.css',
              'dist/js/bootstrap.js',
              'dist/fonts/glyphicons-halflings-regular.eot',
              'dist/fonts/glyphicons-halflings-regular.svg',
              'dist/fonts/glyphicons-halflings-regular.ttf',
              'dist/fonts/glyphicons-halflings-regular.woff',
              'dist/fonts/glyphicons-halflings-regular.woff2'
            ]
          },
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower');
};
