'use strict';

/**
 * @ngdoc function
 * @name pedromadrugacom.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simplate2App
 */
angular.module('pedromadrugacom')
  .controller('MainCtrl', function ($scope, $firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var sync = $firebase(new Firebase('https://radiant-fire-4389.firebaseio.com/posts'));

    $scope.posts = sync.$asArray();




  });
