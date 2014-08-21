'use strict';

/* Controllers */
var memoizeControllers = angular.module('memoizeControllers', []);

memoizeControllers.controller('NavbarController', ['$scope', '$location',
  function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return $location.path() == viewLocation;
    };
  }]);

memoizeControllers.controller('ListController', ['$scope',
  function($scope) {
  }]);
