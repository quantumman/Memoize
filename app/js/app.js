'use strict';

/* App Module */
var memoizeApp = angular.module('memoizeApp', [
  'ngRoute',
  'memoizeControllers',
  'ui.bootstrap'
]);

memoizeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/list', {
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
        redirectTo: '/list'
      });
  }]);
