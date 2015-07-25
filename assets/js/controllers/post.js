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
    '$log',
    function($scope, $sails, $log) {
      $scope.title = '';
      $scope.description = '';

      function createPost () {
        $sails.post('/post', {
          title: $scope.title,
          description: $scope.description
        })
        .then(function(jwres) {
          $log.info(jwres.body);
          location.href = '/#/';
        }, function(jwresError) {
          $log.error(jwresError);
        });
      }

      $scope.createPost = createPost;
    }]);
