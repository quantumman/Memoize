'use strict';

/* App Module */
var memoizeApp = angular.module('memoizeApp', [
  'ngRoute',
  'memoizeControllers',
  'memoizeServices',
  'ui.bootstrap',
  'hc.marked'
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
      .when('/notes/:noteId', {
        templateUrl: 'partials/note.html',
        controller: 'NoteController'
      })
      .when('/notes/edit/:noteId', {
        templateUrl: 'partials/note-edit.html',
        controller: 'EditorController'
      })
      .otherwise({
        redirectTo: '/notes'
      });
  }]);
