"use strict";
/* Handles all the firebase connections */

export default class firebaseConnection {
    constructor () {
        return new Firebase("https://radiant-fire-4389.firebaseio.com");
    }
}
