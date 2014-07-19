define(['../../'+appPath], function (app) {
    app.register.controller('BackendCtrl',function ($scope,$location,$aside) {
        $scope.welcomemessage = "CMS 3.0 Login!";
        $scope.loginSubmit = function(){
            $location.path('/auth');
        }

        $scope.ShowTextInputMode = function() {
            var myOtherAside = $aside({scope: $scope, template: '/views/backend/partial/componentText.html'});
            myOtherAside.$promise.then(function() {
            })
        }
        $scope.ShowComponent = function(){
            var myOtherAside = $aside({scope: $scope, template: '/views/backend/partial/component.html', animation : "am-slide-left" , placement: "left"});
            myOtherAside.$promise.then(function() {
            })
        }
    });
});