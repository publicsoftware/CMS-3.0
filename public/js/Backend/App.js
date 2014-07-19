var appPath = "Backend/App";
define(['angularAMD','jquery','angular-route' ,'angular-resource','angular-sanitize','angular-animate','angular-strap','angular-strap-tpl']
    , function (angularAMD,$) {
    var app = angular.module("CMSApp", ['ngRoute','ngSanitize','ngResource','ngAnimate','mgcrea.ngStrap']);
    app.config(['$routeProvider', '$locationProvider',function ($routeProvider,$locationProvider) {
        $routeProvider.when("/authenticate", angularAMD.route({
            templateUrl: '/views/backend/login.html', controller: 'BackendCtrl',
            controllerUrl: 'Shared/Controller/BackendCtrl',
            resolve: {
//                ComponentLoad: function () {
//                }
            }
        })).when("/auth", angularAMD.route({
            templateUrl: '/views/backend/index.html', controller: 'BackendCtrl',
            controllerUrl: 'Shared/Controller/BackendCtrl',
            resolve: {
//                ComponentLoad: function () {
//                }
            }
        })).otherwise({
            redirectTo : "authenticate"
        });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);
    angularAMD.bootstrap(app);
    return app;
});