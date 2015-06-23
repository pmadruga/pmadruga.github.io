/* Handles all the firebase connections */

class firebaseConnection {
    constructor () {
        return new Firebase('https://radiant-fire-4389.firebaseio.com');
    }
}

export { firebaseConnection }
