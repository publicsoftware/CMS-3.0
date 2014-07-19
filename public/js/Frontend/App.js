var appPath = "Frontend/App";
define(['angularAMD', 'angular-route' ,'angular-resource'], function (angularAMD) {
    var app = angular.module("CMSApp", ['ngRoute','ngResource']);
    app.config(['$routeProvider', '$locationProvider',function ($routeProvider,$locationProvider) {
        $routeProvider.when("/", angularAMD.route({
            templateUrl: '/views/frontend/index.html', controller: 'ComponentCtrl',
            controllerUrl: 'Shared/Controller/ComponentCtrl',
            resolve: {
//                ComponentLoad: function () {
//                }
            }
        })).otherwise({
            redirectTo : "/"
        });
        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);
    angularAMD.bootstrap(app);
    return app;
});