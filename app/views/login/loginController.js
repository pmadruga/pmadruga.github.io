import firebaseConnection from '../../../app/common/services';

class LoginController {

    constructor(firebaseConnection) {
        var ref = firebaseConnection;
        this.auth(ref);
    }

    /**
     * Authentication
     * @param ref
     */
    auth(ref) {

        this.login = function (credentials) {

            // Killing any existing sessions
            ref.unauth();

            return ref.authWithPassword({
                email: credentials.username,
                password: credentials.password

            }, function (error) {
                if (error) {
                    console.log(error);
                } else {
                    window.location.assign('/app/#/post');
                }
            });
        }
    }
}

LoginController.$inject = ['firebaseConnection'];

export { LoginController }


