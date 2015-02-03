'use strict';

angular.module('pedromadrugacom')
  .controller('PostController', function ($scope, $firebase) {

    // TODO:
    // Include date in the post
    // Code cleaning
    // Add the possibility for markup

    /**
     * Persists a post
     */
    $scope.submitPost = function(content, posts) {

      var currentDate = new Date(),
          sync = $firebase(new Firebase('https://radiant-fire-4389.firebaseio.com/posts'));

      // Contains all posts.
      return posts = sync.$asArray().$add({

        'title': content.title,
        'text': content.text,
        'date': JSON.stringify(currentDate)

      });

    };



  });
