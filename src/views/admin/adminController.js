"use strict";

export default class AdminController {
    constructor(firebaseConnection) {

        this.ref = firebaseConnection.child("posts");
        this.postDate = new Date();

    }

    /**
     * Submits content and sync with firebase.
     * Callback needs improvement.
     *
     * @param content
     * @param $firebaseArray
     * @param firebaseConnection
     * @returns {*}
     */
    submitContent(content) {

        if (this.ref !== undefined && this.ref.getAuth && this.ref.getAuth !== null) {

            return this.ref.push({

                "title": content.title,
                "text": content.text,
                "date": Firebase.ServerValue.TIMESTAMP

            }, function () {

                // Success msg display
                console.log("Success at posting");


            });

        } else {

            console.log("Some error occured.");
        }
    }

}

AdminController.$inject = ["firebaseConnection"];
