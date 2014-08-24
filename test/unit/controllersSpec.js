'use strict';

/* jasmine specs for controllers go here */

describe('Memoize controllers', function() {

  beforeEach(module('memoizeApp'));

  describe('NavbarController', function() {
    it('should mark "active" for a navbar item whose path matches $location.path()', (inject(
       function($rootScope, $location, $controller) {
         var scope = $rootScope.$new();
         var controller = $controller('NavbarController', {$scope: scope});

         $location.path('foo');
         expect($location.path()).toBe('/foo');
         expect(scope.isActive('/foo')).toBeTruthy();
         expect(scope.isActive('/hoge')).toBeFalsy();

         $location.path('foo/bar');
         expect($location.path()).toBe('/foo/bar');
         expect(scope.isActive('/foo')).toBeFalsy();
         expect(scope.isActive('/foo/bar')).toBeTruthy();
         expect(scope.isActive('/foo/hoge')).toBeFalsy();

         $location.path('foo?s=t&m=f');
         expect($location.path()).toBe('/foo?s=t&m=f');
         expect(scope.isActive('/foo')).toBeFalsy();
         expect(scope.isActive('/hoge')).toBeFalsy();

         // when application root
         $location.path('');
         expect($location.path()).toBe('/');
         expect(scope.isActive('')).toBeFalsy();
         expect(scope.isActive('/')).toBeTruthy();

         $location.path('/');
         expect($location.path()).toBe('/');
         expect(scope.isActive('')).toBeFalsy();
         expect(scope.isActive('/')).toBeTruthy();
       })));
  });
});
