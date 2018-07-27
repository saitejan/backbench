
'use strict';

var app = angular.module('myApp', ['ui.router','appMain','appHome','appUser']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise("/app/main");
      
      $stateProvider
  .state('app', {
      url: "/app",
      abstract: true
  })
}]);
