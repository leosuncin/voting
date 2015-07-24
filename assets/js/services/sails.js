'use strict';

/**
 * @ngdoc service
 * @name voteApp.$sails
 * @description
 * # $sails
 * Service in the voteApp.
 */
angular.module('voteApp')
  .service('$sails', [
  '$rootScope',
  '$q',
  '$log',
  function($rootScope, $q, $log) {
    var baseUrl = location.origin || 'http://localhost:1337';

    function get (url, query) {
      url = baseUrl + url;
      query = query || {};
      return $q(function(resolve, reject) {
        io.socket.get(url, query, function(data, jwres) {
          if (jwres.statusCode < 400) {
            resolve(jwres);
          } else {
            reject(jwres);
          }
        });
      });
    }

    function post (url, data) {
      url = baseUrl + url;
      return $q(function(resolve, reject) {
        io.socket.post(url, data, function(data, jwres) {
          if (jwres.statusCode < 400) {
            resolve(jwres);
          } else {
            reject(jwres);
          }
        });
      });
    }

    function put (url, data) {
      url = baseUrl + url;
      return $q(function(resolve, reject) {
        io.socket.put(url, data, function(data, jwres) {
          if (jwres.statusCode < 400) {
            resolve(jwres);
          } else {
            reject(jwres);
          }
        });
      });
    }

    function remove (url, query) {
      url = baseUrl + url;
      query = query || {};
      return $q(function(resolve, reject) {
        io.socket.delete(url, query, function(data, jwres) {
          if (jwres.statusCode < 400) {
            resolve(jwres);
          } else {
            reject(jwres);
          }
        });
      });
    }

    function on (event, cb) {
      io.socket.on(event, function(msg) {
        $log.info(event, msg);
        $rootScope.$apply(function() {
          cb.apply(null, msg);
        });
      });
    }

    return {
      get: get,
      post: post,
      put: put,
      delete: remove,
      on: on
    };
  }]);
