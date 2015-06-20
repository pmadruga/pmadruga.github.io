import angular from 'angular';
import uirouter from 'angular-ui-router';
import firebase from 'angularfire';
import uibootstrap from 'angular-bootstrap';

import { BlogController } from './views/blog/blogController';

/**
 * Main module of the application.
 */
angular
  .module('pedromadrugacom', [
    'ui.router',
    'firebase',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('about', {
        templateUrl: 'views/about/about.html',
        url: '/',
        controllerAs: 'AboutController'

      })
      .state('blog', {
        templateUrl: 'views/blog/blog.html',
        url: '/blog',
        controllerAs: 'BlogController'

      })
      .state('portfolio', {
        templateUrl: 'views/work/work.html',
        url: '/work',
        controllerAs: 'WorkController'
      })
      .state('login', {
        templateUrl: 'views/login/login.html',
        url: '/login',
        controllerAs: 'LoginController'

      })
      .state('post', {
        templateUrl: 'views/post/post.html',
        url: '/post',
        controllerAs: 'PostController'

      });

  })

  .controller('BlogController', BlogController)

/**
 * Instantianting firebase and making it accessible to all controllers
 */
  .factory('firebaseConnection', function() {

   return new Firebase('https://radiant-fire-4389.firebaseio.com');

  });

