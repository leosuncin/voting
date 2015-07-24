'use strict';

/**
 * @ngdoc filter
 * @name chatApp.filter:nl2br
 * @function
 * @description
 * @url https://gist.github.com/naoyeye/8220054
 * # Usage in html template:
 * "xxx | nl2br"
 *
 * <div ng-bind-html=" YourString | nl2br "></div>
 *
 * or:
 *
 * "xxx | nl2br:Boolean"
 *
 * Boolean(true or false or just keep null) means is xhtml or not
 * if is xhtml, replace with <br/>; if not, replace with <br>
 *
 * <div ng-bind-html=" YourString | nl2br:true "></div>
 *
 *
 * -------------------------
 *
 * # Example:
 *
 * // ==Analog data===
 * $scope.items = [
 *     {"message": "test"},
 *     {"message": "New\nLine"},
 * ]
 * //=====
 * <div class="comment" ng-repeat="item in items">
 *     <p ng-bind-html=" item.message | nl2br "></p>
 * </div>
 *
 * -------------------------
 *
 * # Output result:
 *
 * <div class="comment ng-scope" ng-repeat="item in items">
 *     <p class="ng-binding" ng-bind-html=" item.message | nl2br ">
 *         test
 *     </p>
 * </div>
 * <div class="comment ng-scope" ng-repeat="item in items">
 *     <p class="ng-binding" ng-bind-html=" item.message | nl2br ">
 *         New<br>Line
 *     </p>
 * </div>
 */
angular.module('voteApp').filter('nl2br', [
  '$sce', function($sce) {
    return function(input, isXhtml) {
      var breakTag;
      if (input == null) {
        input = '';
      }
      if (isXhtml == null) {
        isXhtml = true;
      }
      breakTag = isXhtml ? '<br />' : '<br>';
      input = input.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + breakTag + "$2");
      return $sce.trustAsHtml(input);
    };
  }
]);
