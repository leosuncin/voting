module.exports = function(grunt) {
  grunt.registerTask('compileAssets', [
    'clean:dev',
    'bower:install',
    'jst:dev',
    'less:dev',
    'coffee:dev',
    'copy'
  ]);
};
