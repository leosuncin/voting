'use strict';

describe('Service: $sails', function () {

  // load the service's module
  beforeEach(module('voteApp'));

  // instantiate service
  var $sails;
  beforeEach(inject(function (_$sails_) {
    $sails = _$sails_;
  }));

  it('should do something', function () {
    expect(!!$sails).toBe(true);
  });

});
