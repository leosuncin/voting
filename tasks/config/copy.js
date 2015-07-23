/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    fonts: {
      files: [{
        expand: true,
        flatten: true,
        filter: 'isFile',
        cwd: 'assets',
        src: ['{fonts,vendor}/**/*.{eot,svg,ttf,woff,woff2}'],
        dest: '.tmp/public/fonts'
      }]
    },
    views: {
      files: [{
        expand: true,
        cwd: 'assets',
        src: ['{,views/**/}*.html'],
        dest: '.tmp/public'
      }]
    },
    images: {
      files: [{
        expand: true,
        cwd: 'assets',
        src: [
          '{,images/**/}*.{jpg,jpeg,png,gif,ico,svg,JPG,JPEG,PNG,GIF,ICO,SVG}',
          'robots.txt',
          'swf/*'
        ],
        dest: '.tmp/public'
      }]
    },
    scripts: {
      files: [{
        expand: true,
        cwd: 'assets',
        src: ['js/{,**/}*.js'],
        dest: '.tmp/public'
      }]
    },
    vendor: {
      files: [{
        expand: true,
        cwd: 'assets',
        src: ['vendor/{,**/}*'],
        dest: '.tmp/public'
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
