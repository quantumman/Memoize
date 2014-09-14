'use strict';

/* Services */
var memoizeServices = angular.module('memoizeServices', ['ngResource']);

memoizeServices.factory('Notes', ['$resource',
  function($resource) {
    return $resource('notes/:noteId.json', {}, {
      list: {method: 'GET', params:{noteId: 'notes'}, isArray: true}
    });
  }
]);
