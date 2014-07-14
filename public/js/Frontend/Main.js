require.config({
    baseUrl: "js",
    waitSeconds : 90,
    paths: {
        'angular': '/components/angular/angular.min',
        'angular-route': '/components/angular-route/angular-route.min',
        'angular-resource' : '/components/angular-resource/angular-resource.min',
        'angularAMD': '/components/angularAMD/angularAMD.min',
        'ngload': '/components/angularAMD/ngload.min',
        'bootstrap': '/components/bootstrap/dist/js/bootstrap.min',
        'jquery':  '/components/jquery/dist/jquery.min'
    },
    shim: {
        'angularAMD': ['angular'],
        'angular-route' : ['angular'],
        'angular-resource' : ['angular'],
        'ngload': ['angularAMD']
    },
    deps: ['frontend/App'],
    urlArgs: "bust=v0.01"
});