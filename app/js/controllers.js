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
    $scope.notes = [
      {
        thumbnail: 'img/1.jpg',
        editor: 'TEST',
        title: 'TEST TITLE #1',
        createdDate: '2014-08-26T10:10:10'
      },
      {
        thumbnail: 'img/2.jpg',
        editor: 'fugahoge',
        title: 'TEST TITLE #2',
        createdDate: '2014-08-24T20:20:20'
      },
      {
        thumbnail: 'img/1.jpg',
        editor: 'hoge',
        title: 'TEST TITLE #3',
        createdDate: '2014-09-24T20:20:20'
      }
    ];
  }]);

memoizeControllers.controller('RequestController', [$scope,
  function($scope) {
  }]);
