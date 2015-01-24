'use strict';

angular.module('pedromadrugacom')
  .controller('PostCtrl', function ($scope, $firebase) {

    $scope.postDate = new Date();

    /**
     * Creates a new post
     */
    $scope.submitPost = function(content, posts) {

      var sync = $firebase(new Firebase("https://radiant-fire-4389.firebaseio.com/posts")),
      // Contains all posts.
        posts = sync.$asArray();

      posts.$add({

        'title': content.title,
        'text': content.text
        //'date': new Date()

      });

      //posts.push(post);
      //posts.$save();

      //$scope.persist(posts, sync);

      return posts;

    };

    /**
     * Get existing posts
     */
    $scope.getPosts = function () {

    };

    /**
     * Persist in firebase
     */
    $scope.persist = function (posts, sync) {


      // create a synchronized array for use in our HTML code
      posts = sync.$asArray();
      posts.$save();


    };

    $scope.alertDebug = function () {


    };


  });
