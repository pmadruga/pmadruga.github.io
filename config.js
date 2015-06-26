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

