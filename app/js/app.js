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
      .when('/notes/edit', {
        templateUrl: 'partials/notes-edit.html'
      })
      .otherwise({
        redirectTo: '/list'
      });
  }]);
