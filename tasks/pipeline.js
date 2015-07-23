/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */

// Dependencies like jQuery, or Angular are brought in here
var wiredep = require('wiredep')({
  overrides: {
    bootstrap: {
      main: [
        'dist/css/bootstrap.css',
        'dist/css/bootstrap-theme.css',
        'dist/js/bootstrap.js',
        'dist/fonts/glyphicons-halflings-regular.eot',
        'dist/fonts/glyphicons-halflings-regular.svg',
        'dist/fonts/glyphicons-halflings-regular.ttf',
        'dist/fonts/glyphicons-halflings-regular.woff',
        'dist/fonts/glyphicons-halflings-regular.woff2'
      ]
    }
  }
});

function wiredepMapper(path) {
  return path.replace(/.*bower_components/g, 'vendor');
}

// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = wiredep.css.map(wiredepMapper);
cssFilesToInject.push('styles/**/*.css');

// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = wiredep.js.map(wiredepMapper);
// All of the rest of your client-side js files
// will be injected here in no particular order.
jsFilesToInject.push('js/**/*.js');

// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html',
  'views/**/*.html'
];

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject =
templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
