'use strict';

/**
 * @ngdoc overview
 * @name simplate2App
 * @description
 * # simplate2App
 *
 * Main module of the application.
 */
angular
  .module('simplate2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
