'use strict';

/**
 * @ngdoc function
 * @name githubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubApp
 */
angular.module('githubApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
