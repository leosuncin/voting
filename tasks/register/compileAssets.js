module.exports = function(grunt) {
  grunt.registerTask('compileAssets', [
    'clean:dev',
    'bower:dev',
    'ngconstant:' + process.env.NODE_ENV || 'development',
    'jst:dev',
    'less:dev',
    'coffee:dev',
    'copy'
  ]);
};
