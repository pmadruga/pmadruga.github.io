'use strict';

class PostController {
    constructor() {
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
    submitContent(content, $firebaseArray){

        var ref = new Firebase('https://radiant-fire-4389.firebaseio.com');
        
        console.log(ref);
        console.log(ref.getAuth();
        if (ref !== undefined && ref.getAuth() && ref.getAuth !== null) {

            return $firebaseArray(ref.child('posts')).$add({

                'title': content.title,
                'text': content.text,
                'date': Firebase.ServerValue.TIMESTAMP

            }).then(function (content) {

                // Success msg display
                console.log('Success at posting');

                // Let's reset the form
                this.resetForm(content);

            }.bind(this));

        } else{
            
            console.log('Some error occured. You are probably offline.');
        }
    }

    /**
     * Clears the form by clearing the model after submitting the post.
     * @param content
     */
    resetForm(content) {

        content.text = '';
        content.title = '';

    }

}

PostController.$inject = ['$firebaseArray','firebaseConnection'];

export { PostController }
