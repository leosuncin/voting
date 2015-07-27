'use strict';

/**
 * @ngdoc overview
 * @name voteApp
 * @description
 * # voteApp
 *
 * Main module of the application.
 */
angular
  .module('voteApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'voteApp.config'
  ])
  .config([
    '$routeProvider',
    'ENV',
    '$compileProvider',
    '$logProvider',
    function($routeProvider,ENV , $compileProvider, $logProvider) {
      $compileProvider.debugInfoEnabled(ENV.enviroment !== 'production');
      $logProvider.debugEnabled(ENV.enviroment !== 'production');

      $routeProvider
        .when('/post', {
          templateUrl: 'views/post.html',
          controller: 'PostCtrl'
        })
        .when('/:page?', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          reloadOnSearch: false
        })
        .otherwise({
          redirectTo: '/'
        });
    }]);
