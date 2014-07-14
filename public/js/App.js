define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("CMSApp", ['ngRoute']);
    app.config(function ($routeProvider) {
        //$locationProvider.html5Mode(false).hashPrefix('!');
        $routeProvider.when("/authenticate", angularAMD.route({
            templateUrl: '/views/login.html', controller: 'LoginCtrl',
            controllerUrl: 'Controller/LoginCtrl'
        })).otherwise({
            redirectTo : "/authenticate"
        })
    });
    angularAMD.bootstrap(app);
    return app;
});