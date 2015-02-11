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
    'firebase',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/about');

    $stateProvider
      .state('main', {
        templateUrl: 'views/about/about.html',
        url: '/about',
        controller: 'AboutController'

      })
      .state('blog', {
        templateUrl: 'views/blog/blog.html',
        url: '/blog',
        controller: 'BlogController'

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

  })

/**
 * Instantianting firebase and making it accessible to all controllers
 */
  .factory('firebaseConnection', function() {

   return new Firebase('https://radiant-fire-4389.firebaseio.com');


  });

