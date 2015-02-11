'use strict';

angular.module('pedromadrugacom')
  .controller('PostController', function ($scope, $firebase, firebaseConnection) {

    var ref = firebaseConnection;

    // No alerts being displayed
    $scope.alerts = [];


    /**
     * Persists a post
     */
    $scope.submitPost = function(content, posts) {

      // User can post if he/she is authed
      if (ref.getAuth() && ref.getAuth !== null) {

        var currentDate = new Date(),
            // Syncs with the array of posts
            sync = $firebase(new Firebase('https://radiant-fire-4389.firebaseio.com/posts'));

        // Adds the posts
        return posts = sync.$asArray().$add({

          'title': content.title,
          'text': content.text,
          'date': Firebase.ServerValue.TIMESTAMP

        }).then(function(){

          // Success msg display
          $scope.alerts.push({ type: 'success', msg: 'You have just posted. Go to the blog page. '});

          // Let's reset the form
          $scope.resetForm();


        });

      // If not authed, an error will be displayed.
      } else {

        // Error msg display
        $scope.alerts.push({ type: 'danger', msg: 'You forgot to login. Go to the login page. '});

      }

    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);

    };

    $scope.resetForm = function(){


        var reset = { inputTitle: '', inputContent: '' };
        $scope.content = angular.copy(reset);


    }


  });
