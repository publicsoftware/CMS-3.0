define(['../../'+appPath], function (app) {
    app.register.controller('LoginCtrl',function ($scope,$location) {
        $scope.welcomemessage = "CMS 3.0 Login!";
        $scope.loginSubmit = function(){
            $location.path('/auth');
        }
        $scope.aside = {
            "title": "Title",
            "content": "Hello Aside<br />This is a multiline message!"
        };
    });
});