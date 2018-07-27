

angular.module('appMain',['appMainCtrl'])
.config(function($stateProvider) {
    $stateProvider

        .state('app.main', {
            url: "/main",
            controller: 'mainCtrl',
            templateUrl: "modules/main/template/user.html"
        })
});

