'use strict';

angular
  .module('pedromadrugacom')
  .controller('LoginController', function ($scope) {
    var ref = new Firebase('https://radiant-fire-4389.firebaseio.com');

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
        } else {
          console.log('Authenticated successfully with payload:', authData);
        }
      });

    };


  });
