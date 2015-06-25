'use strict';



class BlogController {
  constructor($firebaseObject) {

      var sync = new Firebase('https://radiant-fire-4389.firebaseio.com');

      this.posts = $firebaseObject(sync.child('posts'));

      // Hides the spinner icon once all data has been loaded
      /*this.posts.$loaded().then(function () {
          angular.element('#loader').hide();
      });*/
  }
}

BlogController.$inject = ['$firebaseObject'];

export { BlogController }

