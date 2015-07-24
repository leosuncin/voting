'use strict';
describe('Filter: nl2br', function() {
  var nl2br;
  beforeEach(module('voteApp'));
  nl2br = {};
  beforeEach(inject(function($filter) {
    return nl2br = $filter('nl2br');
  }));
  return it('should return the input prefixed with "nl2br filter:"', function() {
    var text;
    text = 'angularjs';
    return expect(nl2br(text)).toBe('nl2br filter: ' + text);
  });
});
