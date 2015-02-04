'use strict';

/**
 * Main module of the application.
 */
angular
  .module('pedromadrugacom', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'firebase'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/blog');

    $stateProvider
      .state('main', {
        templateUrl: 'views/main/main.html',
        url: '/blog',
        controller: 'MainController'

      })
      .state('about', {
        templateUrl: 'views/about/about.html',
        url: '/about',
        controller: 'AboutController'

      })
      .state('contact', {
        templateUrl: 'views/contact/contact.html',
        url: '/contact',
        controller: 'ContactController'
      })
      .state('login', {
        templateUrl: 'views/login/login.html',
        url: '/login',
        controller: 'LoginController'

      })
      .state('post', {
        templateUrl: 'views/post/post.html',
        url: '/post',
        controller: 'PostController'

      });

  });
