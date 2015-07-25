'use strict';

/**
 * @ngdoc function
 * @name voteApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the voteApp
 */
angular.module('voteApp')
  .controller('PostCtrl', [
    '$scope',
    '$sails',
    '$location',
    '$window',
    '$log',
    function($scope, $sails, $location, $window, $log) {
      $scope.title = '';
      $scope.description = '';

      function createPost () {
        $sails.post('/post', {
          title: $scope.title,
          description: $scope.description
        })
        .then(function(jwres) {
          $log.info(jwres.body);
          $location.path('/');
        }, function(jwresError) {
          $log.error(jwresError);
        });
      }

      function back () {
        $window.history.back();
      }

      $scope.createPost = createPost;
      $scope.back = back;
    }]);
