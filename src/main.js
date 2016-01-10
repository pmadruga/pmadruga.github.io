"use strict";

import angular from "angular";
import "angular-ui-router";

import firebase from "firebase";
import $firebase from "angularfire";

import "bootstrap";
//import "bootstrap/css/bootstrap.min.css!";
import "../assets/styles/main.css!";

import "angular-bootstrap";
import "angular-sanitize";

import AdminController from "./views/admin/adminController";
import LoginController from "./views/login/loginController";
import PostController from "./views/post/postController";
import WorkController from "./views/work/workController";
import BlogController from "./views/blog/blogController";

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
                templateUrl: "./src/views/about/about.html",
                url: "/",
                controllerAs: "AboutController"

            })
            .state("blog", {
                templateUrl: "./src/views/blog/blog.html",
                url: "/blog",
                controllerAs: "BlogController"

            })
            .state("post", {
                templateUrl: "./src/views/post/post.html",
                url: "/post/:postId",
                controllerAs: "PostController"

            })

            .state("login", {
                templateUrl: "./src/views/login/login.html",
                url: "/login",
                controllerAs: "LoginController"

            })
            .state("admin", {
                templateUrl: "./src/views/admin/admin.html",
                url: "/admin",
                controllerAs: "AdminController"

            })
            .state("work", {
                templateUrl: "./src/views/work/work.html",
                url: "/work",
                controllerAs: "WorkController"
            });
    })

    // Controllers
    .controller("BlogController", BlogController)
    .controller("LoginController", LoginController)
    .controller("AdminController", AdminController)
    .controller("WorkController", WorkController)
    .controller("PostController", PostController)

    // Services
    .service("firebaseConnection", firebaseConnection)

    .run(function () {

    });

angular.element(document).ready(function () {
    angular.bootstrap(document, ["pedromadrugacom"]);
});
