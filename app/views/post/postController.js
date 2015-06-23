'use strict';

import firebaseConnection from '../../../app/common/services';

class PostController {
    constructor () {

      var ref = firebaseConnection;

      this.submitPost(ref);


    }

    submitPost(ref, content, posts){

        var sync = $firebase(new Firebase('https://radiant-fire-4389.firebaseio.com/posts'));

        if (ref.getAuth() && ref.getAuth !== null) {

          return posts = sync.$asArray().$add({

                  'title': content.title,
                  'text': content.text,
                  'date': Firebase.ServerValue.TIMESTAMP

              }).then(function() {

                  // Success msg display
                  $scope.alerts.push({type: 'success', msg: 'You have just posted. Go to the blog page. '});

                  // Let's reset the form
                  $scope.resetForm();

              });

      }
    

  }
}

export { PostController }


/*

angular.module('pedromadrugacom')
  .controller('PostController', function ($scope, $firebase, firebaseConnection) {

    // Estabilishes firebase connection via main service
    var ref = firebaseConnection;

    // Clearing any existing alerts
    $scope.alerts = [];

    /!**
     * Persists a post in firebase.
     * @param content
     * @param posts
     * @returns {*}
     *!/
    $scope.submitPost = function(content, posts) {

      // User can post if he/she is authed
      if (ref.getAuth() && ref.getAuth !== null) {

        var currentDate = new Date(),

            // Syncs with the array of posts
            sync = $firebase(new Firebase('https://radiant-fire-4389.firebaseio.com/posts'));

        // Adds the posts with a closure
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

    /!**
     * Removes alert upon clicking on closing button
     * @param index
     *!/
    $scope.closeAlert = function(index) {

      $scope.alerts.splice(index, 1);

    };

    /!**
     * Resets the form when successfully post
     *!/
    $scope.resetForm = function(){

        // Clears input fields
        var reset = { inputTitle: '', inputContent: '' };

        //Copies cleared input fields
        $scope.content = angular.copy(reset);

    };


  });
*/
