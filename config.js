System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "depCache": {
    "github:angular-ui/ui-router@0.2.15/angular-ui-router": [
      "github:angular/bower-angular@1.4.1"
    ],
    "github:angular/bower-angular-sanitize@1.4.1/angular-sanitize": [
      "github:angular/bower-angular@1.4.1"
    ],
    "app/common/services": [
      "npm:babel-runtime@5.5.8/helpers/class-call-check"
    ],
    "app/views/post/postController": [
      "npm:babel-runtime@5.5.8/helpers/create-class",
      "npm:babel-runtime@5.5.8/helpers/class-call-check"
    ],
    "github:angular/bower-angular@1.4.1": [
      "github:angular/bower-angular@1.4.1/angular"
    ],
    "github:angular-ui/ui-router@0.2.15": [
      "github:angular-ui/ui-router@0.2.15/angular-ui-router"
    ],
    "github:components/jquery@2.1.4": [
      "github:components/jquery@2.1.4/jquery"
    ],
    "github:firebase/firebase-bower@2.2.7": [
      "github:firebase/firebase-bower@2.2.7/firebase"
    ],
    "github:firebase/angularfire@1.1.2/index": [
      "github:firebase/angularfire@1.1.2/dist/angularfire"
    ],
    "github:angular-ui/bootstrap-bower@0.13.0": [
      "github:angular-ui/bootstrap-bower@0.13.0/ui-bootstrap-tpls"
    ],
    "github:angular/bower-angular-sanitize@1.4.1": [
      "github:angular/bower-angular-sanitize@1.4.1/angular-sanitize"
    ],
    "app/views/blog/blogController": [
      "npm:babel-runtime@5.5.8/helpers/class-call-check"
    ],
    "npm:core-js@0.9.18/library/modules/$": [
      "npm:core-js@0.9.18/library/modules/$.fw"
    ],
    "github:firebase/angularfire@1.1.2": [
      "github:firebase/angularfire@1.1.2/index"
    ],
    "npm:core-js@0.9.18/library/fn/object/define-property": [
      "npm:core-js@0.9.18/library/modules/$"
    ],
    "npm:babel-runtime@5.5.8/core-js/object/define-property": [
      "npm:core-js@0.9.18/library/fn/object/define-property"
    ],
    "npm:babel-runtime@5.5.8/helpers/create-class": [
      "npm:babel-runtime@5.5.8/core-js/object/define-property"
    ],
    "app/views/login/loginController": [
      "npm:babel-runtime@5.5.8/helpers/create-class",
      "npm:babel-runtime@5.5.8/helpers/class-call-check",
      "app/common/services"
    ]
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.1",
    "angular-bootstrap": "github:angular-ui/bootstrap-bower@0.13.0",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.1",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "angularfire": "github:firebase/angularfire@1.1.2",
    "babel": "npm:babel-core@5.6.12",
    "babel-runtime": "npm:babel-runtime@5.5.8",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "firebase": "github:firebase/firebase-bower@2.2.7",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:angular/bower-angular-sanitize@1.4.1": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:babel-runtime@5.5.8": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

