'use strict';

class PostController {

    constructor() {

        this.postDate = new Date();

    }

    getContent(content) {

        this.submitContent(content);

    }

    submitContent(content, $firebaseArray, firebaseConnection){

        var ref = firebaseConnection;
        
        console.log(firebaseConnection);

        if (ref.getAuth() && ref.getAuth !== null) {

            return $firebaseArray(ref.child('posts')).$add({

                'title': content.title,
                'text': content.text,
                'date': Firebase.ServerValue.TIMESTAMP

            }).then(function () {

                // Success msg display
                console.log('Success at posting');

                // Let's reset the form
                //$scope.resetForm();

            });

        }

    }
}

PostController.$inject = ['$firebaseArray','firebaseConnection'];

export { PostController }
