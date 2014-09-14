'use strict';

/* Controllers */
var memoizeControllers = angular.module('memoizeControllers', []);

memoizeControllers.controller('NavbarController', ['$scope', '$location',
  function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return $location.path() == viewLocation;
    };
  }]);

memoizeControllers.controller('ListController', ['$scope', 'Notes',
  function($scope, Notes) {
    $scope.notes = Notes.list();
  }]);

memoizeControllers.controller('RequestController', ['$scope',
  function($scope) {
    $scope.notes = [
      {
        thumbnail: 'img/1.jpg',
        title: 'TEST TITLE #1',
        createdDate: '2014-08-26T10:10:10',
        requests: [
          {
            thumbnail: 'img/2.jpg',
            contributor: 'fugahoge',
            comment: 'Fix it!',
            createdDate: '2014-09-29T10:10'
          },
          {
            thumbnail: 'img/1.jpg',
            contributor: 'Hoge',
            comment: 'Fix it!',
            createdDate: '2014-10-29T10:10'
          },
          {
            thumbnail: 'img/2.jpg',
            contributor: 'Fuga',
            comment: 'Fix it!',
            createdDate: '2014-11-29T10:10'
          }
        ]
      },
      {
        thumbnail: 'img/2.jpg',
        title: 'TEST TITLE #2',
        createdDate: '2014-02-26T10:10:10',
        requests: [
          {
            thumbnail: 'img/1.jpg',
            contributor: 'Bar',
            comment: 'Add funny content!',
            createdDate: '2014-04-29T10:10'
          }
        ]
      }
    ];
  }]);
