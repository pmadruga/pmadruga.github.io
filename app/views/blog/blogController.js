"use strict";

class BlogController {
  constructor($firebaseArray, firebaseConnection) {

      this.showSpinner = true;
      this.posts = $firebaseArray(firebaseConnection.child("posts"));

      // Hides the spinner icon once all data has been loaded
      this.posts.$loaded().then(function (){

          this.showSpinner = false;

      }.bind(this));
  }
}

BlogController.$inject = ["$firebaseArray", "firebaseConnection"];

export { BlogController };

