'use strict';

angular.module('pedromadrugacom')
  .controller('MainController', function ($scope, $firebase) {

    //Test template
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    
    var sync = $firebase(new Firebase('https://radiant-fire-4389.firebaseio.com/posts'));

    $scope.posts = sync.$asArray();




  });
