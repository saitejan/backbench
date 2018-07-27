
angular.module('appMainCtrl',[])
.controller('mainCtrl', function($scope, $http, $state) {

	$scope.myDate= Date.now();
   
	   $http.get("http://www.mocky.io/v2/5b4dad7c31000055005ebd04")
  .then(function(result) {
		$scope.memory = result.data;
	});
   
	$http.get("http://www.mocky.io/v2/5b4dadc831000013115ebd05")
  .then(function(result) {
		$scope.invocations = result.data;
	});$http.get("http://www.mocky.io/v2/5b4dae7431000013115ebd12")
  .then(function(result) {
		$scope.requests_dashboard = result.data.reply;
	});$http.get("http://www.mocky.io/v2/5b4daf3431000055005ebd18")
  .then(function(result) {
		$scope.activities = result.data.reply;
	});$http.get("http://www.mocky.io/v2/5b4daf683100006e0b5ebd1a")
  .then(function(result) {
		$scope.benchList = result.data.reply;
	});
	
 

$scope.IsVisible = true;

$scope.ShowHide = function(){
    $scope.nameval="Shared with me"
    $scope.IsVisible = $scope.IsVisible=false ;
}

$scope.mybench1=function(){


	$state.go('app.main');
    $scope.IsVisible = $scope.IsVisible=true ;
} 

$scope.mybench=function(){


	$state.go('app.home');

} 

	
 });
 
