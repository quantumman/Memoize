'use strict';

/* Services */
var memoizeServices = angular.module('memoizeServices', ['ngResource']);

memoizeServices.factory('Notes', ['$resource',
  function($resource) {
    return $resource('notes/:noteId.json', {noteId: '@id'}, {
      list: {method: 'GET', params:{noteId: 'notes'}, isArray: true},
      requests: {method: 'GET', params:{noteId: 'requests'}, isArray: true}
    });
  }
]);
