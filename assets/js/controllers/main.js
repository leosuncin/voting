'use strict';

/**
 * @ngdoc function
 * @name voteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the voteApp
 */
angular.module('voteApp')
  .controller('MainCtrl', [
    '$scope',
    '$sails',
    '$routeParams',
    '$location',
    '$log',
    function($scope, $sails, $routeParams, $location, $log) {
      $scope.posts = [];
      $scope.limit = 12;
      $scope.page = $routeParams.page || 1;

      function updatePost(id, cb) {
        $scope.posts.forEach(function(post) {
          if (post.id === id) {
            return cb(post);
          }
        });
      }

      function socketListener (msg) {
        switch (msg.verb) {
          case 'created':
            $log.debug('New post received', msg.data);
            $scope.posts.unshift(msg.data)
          break;
          case 'updated':
            $log.debug('Update post received', msg.id, msg.data);
            updatePost(msg.id, function(post) {
              angular.merge(post, msg.data);
            });
          break;
        }
      }

      function voteCallback (data, post) {
        if (data.update) {
          post.message = 'Thanks for your vote to ' + post.title;
        } else {
          post.message = 'You have already vote for ' + post.title;
        }
      }

      function init () {
        $sails.on('post', socketListener);
        $sails.get('/post', {
          limit: $scope.limit,
          skip: $scope.limit * ($scope.page - 1),
          sort: {createdAt: -1}
        })
        .then(function(jwres) {
          $scope.posts = jwres.body;
          $scope.noMore = $scope.posts.length < $scope.limit;
        }, function(jwresError) {
          $log.error(jwresError);
        });
      }

      function upVote (post) {
        $sails.put('/post/' + post.id + '/positive')
        .then(function(jwres) {
          voteCallback(jwres.body, post);
        }, function(jwresError) {
          $log.error(jwresError);
        });
      }

      function downVote (post) {
        $sails.put('/post/' + post.id + '/negative')
        .then(function(jwres) {
          voteCallback(jwres.body, post);
        }, function(jwresError) {
          $log.error(jwresError);
        });
      }

      function previous () {
        $scope.page--;
        $location.path('/' + $scope.page);
      }

      function next () {
        $scope.page++;
        $location.path('/' + $scope.page);
      }

      function getRange (n) {
        var range = [];
        for (var i = n <= 4 ? 1 : n - 4; i <= n; i++) {
          range.push(i);
        }
        return range;
      }

      init();

      $scope.upVote = upVote;
      $scope.downVote = downVote;
      $scope.previous = previous;
      $scope.next = next;
      $scope.getRange = getRange;
    }]);
