/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

  grunt.config.set('watch', {
    coffee: {
      files: ['assets/js/**/*.coffee'],
      tasks: ['coffee:dev', 'sails-linker:devJs'],
      options: {
        livereload: true
      }
    },
    html: {
      files: ['assets/{,views/**/}*.html'],
      tasks: ['copy:views'],
      options: {
        livereload: true
      }
    },
    scripts: {
      files: ['assets/js/**/*.js'],
      tasks: ['copy:scripts', 'sails-linker:devJs'],
      options: {
        livereload: true
      }
    },
    images: {
      files: ['assets/{,images/**/}*.{jpg,jpeg,png,gif,ico,svg}'],
      tasks: ['copy:images'],
      options: {
        livereload: true
      }
    },
    bower: {
      files: ['assets/vendor/**/*'],
      tasks: [
        'copy:vendor',
        'sails-linker:devStyles',
        'sails-linker:devJs'
      ],
      options: {
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
