'use strict';

/* Controllers */
var memoizeControllers = angular.module('memoizeControllers', []);

memoizeControllers.controller('NavbarController', ['$scope', '$location',
  function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return $location.path() == viewLocation;
    };
  }]);

memoizeControllers.controller('NoteController', ['$scope', '$routeParams', 'Notes', 'marked',
  function($scope, $routeParams, Notes, marked) {
    $scope.id = $routeParams.noteId;

    $scope.note = Notes.get({noteId: $scope.id});
  }]);

memoizeControllers.controller('ListController', ['$scope', 'Notes',
  function($scope, Notes) {
    $scope.notes = Notes.list();
  }]);

memoizeControllers.controller('RequestController', ['$scope', 'Notes',
  function($scope, Notes) {
    $scope.notes = Notes.requests();
  }]);
