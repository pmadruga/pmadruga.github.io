'use strict';

angular
  .module('pedromadrugacom')
  .controller('LoginController', function ($scope, firebaseConnection) {

    // Calling the service that provides connection to firebase, defined in main module (app.js)
    var ref = firebaseConnection;

    // TODO:
    // should only show login if not logged in already.
    // should show a success and error message


    /**
     * Authentication with firebase
      * @param credentials
     */
    $scope.login = function(credentials) {

      return ref.authWithPassword({
        email:credentials.username,
        password: credentials.password
      },
        function (error, authData) {
        if (error) {
          console.log('Login Failed!', error);
          // Show error message
        } else {
          console.log('Authenticated successfully with payload:', authData);
          // Should show a success message
          // And then redirect to the home page
        }
      });

    };


  });
