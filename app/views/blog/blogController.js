'use strict';

class BlogController {
  constructor($firebaseObject) {

      const sync = new Firebase('https://radiant-fire-4389.firebaseio.com');

      this.showSpinner = true;

      this.posts = $firebaseObject(sync.child('posts'));

      // Hides the spinner icon once all data has been loaded
      this.posts.$loaded().then(function (){

          this.showSpinner = false;

      }.bind(this));
  }
}

BlogController.$inject = ['$firebaseObject'];

export { BlogController }

