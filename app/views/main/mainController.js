'use strict';

/**
 * @ngdoc function
 * @name simplate2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simplate2App
 */
angular.module('simplate2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
