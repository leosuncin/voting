'use strict';

/**
 * @ngdoc function
 * @name voteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the voteApp
 */
angular.module('voteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
