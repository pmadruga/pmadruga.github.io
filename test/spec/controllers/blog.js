'use strict';

describe('Controller: BlogController', function () {

  // load the controller's module
  beforeEach(module('pedromadrugacom'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $firebase) {
    scope = $rootScope.$new();
    MainCtrl = $controller('BlogController', {
      $scope: scope
    });
  }));

  it('should have posts with content', function () {
    expect(scope.posts).not.toBe(null);
  });
});
