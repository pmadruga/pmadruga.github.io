"use strict";

import angular from "angular";
import "angular-ui-router";

import firebase from "firebase";
import $firebase from "angularfire";

import "bootstrap";
import "bootstrap/css/bootstrap.min.css!";
import "./styles/main.css!";

import "angular-bootstrap";
import "angular-sanitize";

import { BlogController } from "./views/blog/blogController";
import { LoginController } from "./views/login/loginController";
import { PostController } from "./views/post/postController";

import { firebaseConnection } from "./common/services";

/**
 * Main module of the application.
 */
angular
    .module("pedromadrugacom", [
        "ui.router",
        "firebase",
        "ui.bootstrap",
        "ngSanitize"
    ])

    // Routing
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("about", {
                templateUrl: "./views/about/about.html",
                url: "/",
                controllerAs: "AboutController"

            })
            .state("blog", {
                templateUrl: "./views/blog/blog.html",
                url: "/blog",
                controllerAs: "BlogController"

            })
            .state("portfolio", {
                templateUrl: "./views/work/work.html",
                url: "/work",
                controllerAs: "WorkController"
            })
            .state("login", {
                templateUrl: "./views/login/login.html",
                url: "/login",
                controllerAs: "LoginController"

            })
            .state("post", {
                templateUrl: "./views/post/post.html",
                url: "/post",
                controllerAs: "PostController"

            });
    })

    // Controllers
    .controller("BlogController", BlogController)
    .controller("LoginController", LoginController)
    .controller("PostController", PostController)

    // Services
    .service("firebaseConnection", firebaseConnection);

angular.element(document).ready(function () {
    angular.bootstrap(document, ["pedromadrugacom"]);
});

