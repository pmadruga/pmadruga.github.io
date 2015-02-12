'use strict';

describe('Controller: AboutController', function () {

  // load the controller's module
  beforeEach(module('pedromadrugacom'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutController', {
      $scope: scope
    });
  }));

});
