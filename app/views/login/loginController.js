'use strict';

angular
  .module('pedromadrugacom')
  .controller('LoginController', function ($scope, firebaseConnection, $location) {

    // Calling the service that provides connection to firebase, defined in main module (app.js)
    var ref = firebaseConnection;

    // Resetting alerts
    $scope.authAlerts = [];

    /**
     * Authentication with firebase
      * @param credentials
     */
    $scope.login = function(credentials) {

      // Remove any existing auths
      ref.unauth();

      return ref.authWithPassword({
        email:credentials.username,
        password: credentials.password
      },
        function (error) {

        if (error) {

          // Show error message
          $scope.authAlerts.push({ type: 'danger', msg: error});


        } else {

          // If successful login, redirect to the home page
          $location.path('post');
        }
      });

    };


  });
