'use strict';

import $firebase from 'angularfire';
import firebaseConnection from '../../../app/common/services';


class BlogController {
  constructor() {
    this.loadBlogPosts();
  }

  /**
   * Syncs with firebase to retrieve all the blog posts
   */
  loadBlogPosts() {

    var sync = $firebase(new Firebase('https://radiant-fire-4389.firebaseio.com/posts'));

    this.posts = sync.$asArray();

    // Hides the spinner icon once all data has been loaded
    this.posts.$loaded().then(function () {
      angular.element('#loader').hide();
    });

  }
}

export { BlogController }

/*
 'use strict';

 angular.module('pedromadrugacom')
 .controller('BlogController', function ($scope, $firebase) {

 /!* Fetches all existing posts. Notice the "posts" in the end of the url *!/
 var sync = $firebase(new Firebase('https://radiant-fire-4389.firebaseio.com/posts'));

 /!* Binding *!/
 $scope.posts = sync.$asArray();

 $scope.posts.$loaded().then(function() {
 angular.element('#loader').hide();
 });


 });
 */
