"use strict";

class WorkController {
    constructor($modal){
        this.modal = $modal;

    }

    openModal(project){
        this.modal.open({
            template: this.getImageSrc(project)

        });

    }

    getImageSrc(src){

        switch(src){

            case "swish": return "<img src='../assets/images/mobileapp1.png' class='img-responsive'>";
            case "pmcom": return "<img src='../assets/images/pmcom.png' class='img-responsive'>";
            case "simplate": return "<img src='../assets/images/simplate.png' class='img-responsive'>";
            case "godialog": return "<img src='../assets/images/godialog.png' class='img-responsive'>";
            case "cphize": return "<img src='../assets/images/cphize.png' class='img-responsive'>";

        }

    }
}

WorkController.$inject = ["$modal"];
export { WorkController };