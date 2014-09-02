'use strict';

/* App Module */
var memoizeApp = angular.module('memoizeApp', [
  'ngRoute',
  'memoizeControllers',
  'memoizeServices',
  'ui.bootstrap'
]);

memoizeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/notes', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
      })
      .when('/notes/request', {
        templateUrl: 'partials/notes-request.html',
        controller: 'RequestController'
      })
      .when('/notes/edit', {
        templateUrl: 'partials/notes-edit.html'
      })
      .otherwise({
        redirectTo: '/notes'
      });
  }]);
