'use strict';

/**
 * Created by pedromadruga on 23/11/14.
 */

angular
  .module('pedromadrugacom')
  .controller('LoginCtrl', function ($scope) {
    var ref = new Firebase('https://radiant-fire-4389.firebaseio.com');

    $scope.login = function login(credentials) {

      ref.authWithPassword({
        email:credentials.username,
        password: credentials.password
      }, function (error, authData) {
        if (error) {
          console.log("Login Failed!", error);

        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });

    }


  });
