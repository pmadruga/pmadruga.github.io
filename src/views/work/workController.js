"use strict";

class WorkController {
    constructor(){

        console.log("hello");

    }

    openModal(){

        this.modal.open = {

            templateUrl: "showModal"


        };
    }

}

WorkController.$inject = [];
export { WorkController };