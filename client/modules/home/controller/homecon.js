angular.module('appHomeCtrl',[])
    .controller('HomeCtrl',function ($scope,$http,$state,UserService) {
        
    $scope.nameval="My Bench";

$scope.IsVisible = true;

$scope.ShowHide = function(){
    $scope.nameval="Shared with me"
    $scope.IsVisible = $scope.IsVisible=false ;
}

$scope.home=function(){
	$state.go('app.main');
} 

$scope.mybench1=function(){
	$state.go('app.home');
    $scope.IsVisible = $scope.IsVisible=true ;
} 

$scope.benchdata=function(app){
   
    UserService.setUserData(app);
    $state.go('app.userData');
}

$http.get("http://www.mocky.io/v2/5b4daf683100006e0b5ebd1a")
  .then(function(result) {
		$scope.benchList = result.data.reply;
	});


})