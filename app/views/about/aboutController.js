'use strict';

/**
 * @ngdoc function
 * @name simplate2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simplate2App
 */
angular.module('simplate2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
