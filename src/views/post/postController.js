"use strict";
export default class PostController{
    constructor($firebaseObject, firebaseConnection, $stateParams){

        // Getting the single post from the firebase "posts" object.
        this.singlePost = $firebaseObject(firebaseConnection.child("posts").child($stateParams.postId));

    }

}

PostController.$inject = ["$firebaseObject", "firebaseConnection", "$stateParams"];
