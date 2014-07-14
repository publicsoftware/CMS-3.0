var appPath = "backend/App";
define(['angularAMD', 'angular-route' ,'angular-resource'], function (angularAMD) {
    var app = angular.module("CMSApp", ['ngRoute','ngResource']);
    app.config(['$routeProvider', '$locationProvider',function ($routeProvider,$locationProvider) {
        $routeProvider.when("/authenticate", angularAMD.route({
            templateUrl: '/views/backend/login.html', controller: 'LoginCtrl',
            controllerUrl: 'shared/controller/LoginCtrl'
        })).when("/auth", angularAMD.route({
            templateUrl: '/views/backend/index.html', controller: 'LoginCtrl',
            controllerUrl: 'shared/controller/LoginCtrl'
        })).otherwise({
            redirectTo : "authenticate"
        });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);
    angularAMD.bootstrap(app);
    return app;
});