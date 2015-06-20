class BlogController {

  constructor() {

    alert('hi!');

    this.hello = "greetings";

    let sync = $firebase(new Firebase('https://radiant-fire-4389.firebaseio.com/posts'));

    this.posts = sync.$asArray();

    this.posts.$loaded().then(function () {
      angular.element('#loader').hide();
    });

  }

}


export { BlogController }

/*
 'use strict';

 angular.module('pedromadrugacom')
 .controller('BlogController', function ($scope, $firebase) {

 /!* Fetches all existing posts. Notice the "posts" in the end of the url *!/
 var sync = $firebase(new Firebase('https://radiant-fire-4389.firebaseio.com/posts'));

 /!* Binding *!/
 $scope.posts = sync.$asArray();

 $scope.posts.$loaded().then(function() {
 angular.element('#loader').hide();
 });


 });
 */
