angular.module('appHome',['appHomeCtrl','UserServiceMod'])

.config(function($stateProvider) {
    $stateProvider

        .state('app.home', {
            url: "/home",
            controller: 'HomeCtrl',
            templateUrl: "modules/home/template/hometemp.html"
        })
});


