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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
