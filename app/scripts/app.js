'use strict';

/**
 * @ngdoc overview
 * @name pedromadruga.com
 * @description
 * # pedromadruga.com
 *
 * Main module of the application.
 */
angular
  .module('pedromadrugacom', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('about', {
        templateUrl: 'views/about/about.html',
        url: '/about',
        controller: 'AboutCtrl'

      })
      .state('contact', {
        templateUrl: 'views/contact/contact.html',
        url: '/contact',
        controller: 'ContactCtrl'
      })
      .state('login', {
        templateUrl: 'views/login/login.html',
        url: '/login',
        controller: 'LoginCtrl'

      })
      .state('post', {
        templateUrl: 'views/post/post.html',
        url: '/post',
        controller: 'PostCtrl'

      });
      /*.otherwise({
        redirectTo: '/'
      });*/
  });
